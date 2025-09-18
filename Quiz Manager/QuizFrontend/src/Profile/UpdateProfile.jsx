import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './UpdateProfile.module.css'
import { useNavigate } from 'react-router';
const UpdateProfile = () => {
  const [fname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data,setdata]=useState("")
   const navigate=useNavigate()
  const token = localStorage.getItem("token");
 const userId=localStorage.getItem("userId");

    const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/user/${userId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setdata(response.data.data);
    
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
    useEffect(() => {
      fetchData();
    }, [token]);
    useEffect(()=>{
        if(data){
           setName(data?.user?.fullname)
          setEmail(data?.user?.email)
        }
    },[data])

  const changeHandler = (e) => {
    if (e.target.id === "name") setName(e.target.value);
     if (e.target.id === "email") setEmail(e.target.value);
  };
 
  if (!data) return <div>Loading...</div>;

const  changeSave=async()=>{
   const datatosend={
    _id:userId,
    email:email,
    fullname:fname 
   }
    try {
      const response = await axios.put("http://localhost:3000/user/"
          ,datatosend,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setdata(response.data.data);
        navigate("/")
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
  return (
    <div className={style.body}>
      <div className={style.container}>
          <h1 className={style.title}>Update your Profile</h1>
          <div className={style.fname}>
      <input
        type="text"
        id="name"
        value={fname}
        onChange={changeHandler}
      />
      </div>
      <div className={style.email}>
      <input
        type="email"
        id="email"
        value={email}
        onChange={changeHandler}
      />
      </div>
      <div className={style.buttonele}>
        <button className={style.button} onClick={changeSave}>Save changes</button>
      </div>
    </div>
      </div>
  );
};

export default UpdateProfile;
