import React from 'react'
import styles from './Login.module.css';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../App';
import { useContext } from 'react';

const Login = () => {
   const {isAuthenticated,setIsAuthenticated }= useContext(AuthContext);
    console.log(isAuthenticated)
  const navigate = useNavigate();
 const submitHandler=()=>{
   const dataobject={
          email:email,
          password:password          
      }     
axios.post("http://localhost:3000/auth/login",dataobject)
.then((res) => console.log(res.data))
.catch((err) => console.log(err));
alert("you are login")   
navigate("/")
setIsAuthenticated(prev=>!prev)
    } 
  return (
    <div className={styles.body}>
        <div className={styles.container}>
        <div className={styles.title}>Login User</div>
        <div className={styles.common}>
            <label htmlFor="email">Email:</label>
            <input type="email" className={styles.input} id="email"/>
            </div>
            <div className={styles.common}>
        <label htmlFor="password " >Password:</label>
        <input type="password" className={styles.input} id='password'/>
        </div>
        <div  className={styles.button}>
            <button className={styles.newbutton} onClick={submitHandler}>User Login</button>
        </div>
    </div>
    </div>
  )
}
export default Login
