import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import style from './MyReport.module.css'
const MyReport = () => {
    const [data,setdata]=useState([])
     const token = localStorage.getItem("token");
       const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/report/all`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setdata(response.data.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className={style.body}>
   <div className={style.container}>
{ data && data.map((user, index) => (
  <ul key={index} className={style.box}>
      <li>Quiz Name: {user.quizName}</li>
    <li>Total Score: {user.total}</li>
    <li>Your Score: {user.score}</li>
  </ul>
)) }

</div>
    </div>
  )
}

export default MyReport
