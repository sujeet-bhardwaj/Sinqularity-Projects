import { useEffect } from 'react'
import style from "./Changeimage.module.css"
import { useState } from 'react';
import { MyContext } from '../App';
import { useContext } from 'react';
import axios from 'axios';
const Changeimage = () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const [profile,setProfile]=useState({})
      const [newImage, setNewImage] = useState(null);
const fetchdata = async () => {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${userId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setProfile(response.data.data.user)
  } catch (error) {
    console.error("Error fetching user:", error.response?.data || error.message);
  }
};
   console.log(profile)
useEffect(()=>{
  fetchdata()
},[])
  const saveImage=()=>{
    console.log("something")
  }
  return (
    <div className={style.body}>
         <div>Change Profile Image</div>
            {console.log(profile.profilepic)}
          {profile?.profilepic ? (
        <img
          src={`http://localhost:3000${profile.profilepic}`}
          alt="Profile"
          width="120"
        />
      ) : (
        <p>No profile picture</p>
      )}
           <input type="file"  onChange={handleImageChange} />
       <button onClick={saveImage}>Update Save</button>
    </div>
  )
}


export default Changeimage
