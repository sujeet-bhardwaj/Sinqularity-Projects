import React from 'react'
import style from './Register.module.css'
import { useState } from 'react';
import axios from 'axios'
const Register = () => {
    const [fname,setFname]=useState("");
 const [number,setNumber]=useState("");
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
 const [cpassword,setcpassword]=useState("");

    const changeHandler=(e)=>{
          if(e.target.id==="first"){
              setFname(e.target.value)
          }
          else if(e.target.id==="cpassword"){
             setcpassword(e.target.value)
          }
       else if(e.target.id==="number"){
setNumber(e.target.value)
       }
       else if(e.target.id==="password"){

setPassword(e.target.value)
       }
     else  if(e.target.id==="email"){
setEmail(e.target.value)
     }
    }
   const submitHandler=()=>{
      const dataobject={
         fullname:fname,
          ConfirmPassword:cpassword,
          mobile:number, 
          email:email,
          password:password          
      }
axios.post("http://localhost:3000/auth",dataobject)
.then((res) => console.log(res.data))
.catch((err) => console.log(err));
console.log(dataobject)    
setFname("")     
setcpassword("")
setNumber("")
setEmail("")
setPassword("")
alert("form is submitted ") 
    }
  return (
  <div className={style.body}>
<div className={style.container}>
<div className={style.title}>Register User</div>
<div className={style.common}>
<label htmlFor="first">Full Name:</label>
<input type="text" className={style.input} id="first"  value={fname} onChange={changeHandler}/>
</div>

<div className={style.common}>
<label htmlFor="number">Mobile:</label>
<input type="number" className={style.input} id="number" value={number}  onChange={changeHandler}/>
</div>
<div className={style.common}>
<label htmlFor="email">Email:</label>
<input type="email" className={style.input} id="email"   value={email} onChange={changeHandler}/>
</div>
<div className={style.common}>
<label htmlFor="password">Password:</label>
<input type="password"className={style.input}  id="password"  value={password} onChange={changeHandler}/>
</div>
<div className={style.common}> 
<label htmlFor="cpassword">Confirm Password:</label>
<input type="password"className={style.input}  id="cpassword"  value={cpassword} onChange={changeHandler}/>
</div>
<div className={style.inputcheck}>
  <input type="checkbox"/>
<span>Remember  Me </span>
</div>
<div className={`${style.common} ${style.text}`}>
<button onClick={submitHandler} className={style.button}>Sign up </button>
</div>
</div>
</div>    
  )
}

export default Register
