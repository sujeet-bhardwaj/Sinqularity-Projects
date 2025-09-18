import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import style from "./User.module.css"
const Users = () => {
  const [users, setUsers] = useState([]);
  const token=localStorage.getItem("token")
   const fetchusers=async()=>{
      try {
       const resp=await axios.get("http://localhost:3000/user/all",
 { headers: { Authorization: `Bearer ${token}` } }
       )         
        setUsers(resp.data.data)
      } catch (error) {
        console.log("error occured is",error)
      }
   }
 useEffect(()=>{
fetchusers()
 },[])
  return (
            <div className={style.body}>
             
    <div className={style.container}>
       <h1 className={style.name}>Here all the register user </h1>
      {users && users.map((user, index) => (
  <ul key={index} className={style.box}>
    <li>{user.fullname}</li>
  </ul>
))}
    </div>
    </div>
  )
}
export default Users
 