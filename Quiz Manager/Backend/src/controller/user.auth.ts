import { Request,Response ,NextFunction} from 'express'
import User from '../models/user.model'
import bcryptjs from 'bcryptjs'
import jwt from "jsonwebtoken";
import {validationResult} from "express-validator"
import Error  from "../helper/error"
import { ReturnResponse } from "../utils/defination"
// user register 
const userRegister=async(req:Request,res:Response,next:NextFunction)=>{
let resp:ReturnResponse;
try {  
    const validatonError=validationResult(req)
    if(!validatonError.isEmpty()){
      const err=new Error("validation now  failed");
      err.statusCode=422;
      err.data=validatonError.array()
      throw err
    }
  const {fullname,email,mobile,password}=req.body
   const hashedPassword = await bcryptjs.hash(password, 10)
    const result=await User.create({
            fullname,
            email,
            mobile,
            password: hashedPassword
         }
         )   
  if(!result){
   const err=new Error("no user exist");
    err.statusCode=401;
    throw err;
  }
   else{
         const token = jwt.sign(
      { id: result._id, email: result.email },
      process.env.JWT_TOKEN||"",
      { expiresIn: "6d" }
    );
       resp={status:"success",message:" registration  done",data:{userId:result._id,token:token}}
  res.status(200).send(resp)
   } 
}
 catch (error) {
  next(error)
}
}
// login user 
const loginUser=async(req:Request,res:Response,next:NextFunction)=>{
  let resp: ReturnResponse;
  try {
    const email = req.body.email;
    const password = req.body.password;
  
    // find user with email 
    const user = await User.findOne({ email });
    if (user) {    
    const status=await bcryptjs.compare(password,user.password)
 
   if(status){
 

// Sign token (expires in 6 days)
const token = jwt.sign({userId:user._id, email: user.email},process.env.JWT_TOKEN ||"", { expiresIn: "6d" });
       console.log(user._id)
       resp = { status: "success", message: "user login", data: { token: token, userId: user._id } }
      res.status(200).send(resp);

   }
   else{
    const err=new Error("no user exist");
    err.statusCode=401;
    throw err;
   }
     
    } else {
   const err=new Error(" user not exist");
    err.statusCode=401;
    throw err;

    }
  } catch (error) {
  next(error)
  }
}


const isuserExist = async (email: string): Promise<boolean> => {
    // find user with email 
    const user = await User.findOne({ email });

 if(!user){
   return false
 }
return true

}

export {loginUser,userRegister,isuserExist}