import { NextFunction, Request,Response } from "express";
import Quiz from "../models/quiz.model";
import Error from '../helper/error'
import {validationResult} from "express-validator"
import { ReturnResponse } from "../utils/defination"
 const createQuiz=async(req:Request,res:Response,next:NextFunction)=>{
try { 
       const validatonError=validationResult(req)
      if(!validatonError.isEmpty()){
          const err=new Error("validation now  failed");
          err.statusCode=422;
          err.data=validatonError.array()
          throw err
        }
const  created_by=req.userId;
  const name=req.body.name;
  const question_list=req.body.question_list;
  const answer=req.body.answer;
  const checkArr:any=[];
question_list.forEach((obj: { question: any; })=> {
  checkArr.push(obj.question)
});
const unique = new Set(checkArr);

if (unique.size !== checkArr.length) {
    const err=new Error("Duplicate questions found");
          err.statusCode=422;   
   throw err
}
    const quiz=await new Quiz({name,question_list,answer,created_by})
 const result=await quiz.save()
const resp:ReturnResponse={status:"success",message:"quiz created succesfully",data:{quizId:result._id}}
    res.status(201).send(resp)

} catch (error) {
     next(error)
}
 }
 const getQuiz=async(req:Request,res:Response,next:NextFunction)=>{
 try {
 const quizId=req.params.quizId
   const quiz= await Quiz.findById(quizId,{name:1,question_list:1,answer:1,created_by:1})
   if(!quiz){
      const err=new Error("quiz is not find ")
      err.statusCode=404
      throw err
   }
   if(!quiz.created_by || req.userId !== quiz.created_by.toString()){
        const err=new Error("not authorized person")
      err.statusCode=403
      throw err
   }
const resp:ReturnResponse={status:"success",message:"get data succesfully",data:quiz}
    res.status(201).send(resp)

 } catch (error) {
     next(error)
 }
 
}
// update start here 
 const updateQuiz=async(req:Request,res:Response,next:NextFunction)=>{
  try {
         const validatonError=validationResult(req)
      if(!validatonError.isEmpty()){
          const err=new Error("validation now  failed");
          err.statusCode=422;
          err.data=validatonError.array()
          throw err
        }
    const quizId=req.body._id
   const quiz=await Quiz.findById(quizId)

      if(!quiz){
      const err=new Error("quiz is not find ")
      err.statusCode=404
      throw err
   }
      if(!quiz.created_by || req.userId !== quiz.created_by.toString()){
        const err=new Error("not authorized person")
      err.statusCode=403
      throw err
   }
    if(quiz.ispublished){
     
       const err=new Error("You cannot published ,public quiz")
      err.statusCode=405
      throw err
    }
   quiz.name=req.body.name;
   quiz.question_list=req.body.question_list
   quiz.answer=req.body.answer
  await quiz.save()
const resp:ReturnResponse={status:"success",message:"quiz updated  succesfully",data:{}}
    res.status(201).send(resp)
  } catch (error) {
    next (error)
  } 
}
// delte quiz start here 
 const deleteQuiz=async(req:Request,res:Response,next:NextFunction)=>{
try {
    const quizid=req.params.quizId
    const quiz=await Quiz.findById(quizid)
    if(!quiz){
        const err=new Error("quiz is not find ")
        err.statusCode=404
        throw err
    }
    if(!quiz.created_by || req.userId !== quiz.created_by.toString()){
        const err=new Error("not authorized person")
      err.statusCode=403
      throw err
    }
 if(quiz.ispublished){   
       const err=new Error("You cannot delete ,public quiz")
      err.statusCode=405
      throw err
    }
     await Quiz.deleteOne({_id:quizid})
   const resp:ReturnResponse={status:"success",message:"quiz deleted  succesfully",data:{}}
    res.status(201).send(resp)
} catch (error) {
     next(error)
}  
}

// publish quiz start here 
 const publishQuiz=async(req:Request,res:Response,next:NextFunction)=>{

  try {
    
const quizId=req.body.quizId

 const quiz=await Quiz.findById(quizId)
  console.log(quiz)

   if(!quiz){
      const err=new Error("quiz is not find ")
      err.statusCode=404
      throw err
   }
     if(quiz?.ispublished){
       const err=new Error("quiz is already pulished")
      err.statusCode=404
      throw err
  }
    if(!quiz.created_by || req.userId !== quiz.created_by.toString()){
          const err=new Error("not authorized person")
        err.statusCode=403
        throw err
    }
     const numberofQuestion=quiz?quiz.question_list.length:null 
       if(numberofQuestion==null ||numberofQuestion<5){
               const err=new Error(" number of question  should be at least 5 ")
                err.statusCode=404
            throw err
       }



  await quiz.save()
   const resp:ReturnResponse={status:"success",message:"quiz published",data:{}}
    res.status(201).send(resp)
  } catch (error) {
     next(error)
  }

}

export {createQuiz,getQuiz,updateQuiz,deleteQuiz,publishQuiz}