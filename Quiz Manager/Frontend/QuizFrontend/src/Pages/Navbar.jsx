import { Link } from "react-router-dom";
import  style from  "./Navbar.module.css";

import { AuthContext } from '../App';
import { useContext } from 'react';
export default function Navbar() {
    const {isAuthenticated}= useContext(AuthContext);
  return (
    <nav className={style.navbar}>
      <div className={style.heading}>
          <img src="/images/logo.jpeg" alt="" />
      <h2 className={style.logo}>Quiz App </h2>
    
      </div>
       <div className={style.first}>
      <ul>
       <div className={style.li}>
           <li><Link to="/" className={style.link}>Home</Link></li>
        <li><Link to="/createquiz" className={style.link}>CreateQuiz</Link></li>
          <li><Link to="/practice" className={style.link}>FreePractice </Link></li>
            <li to="/explore" ><Link className={style.link}>Explore</Link></li>
            </div>
            </ul>
            </div>
            <div className={style.second}>
                 <ul>
                  <div className={style.li}>
            {isAuthenticated?<>  <li><Link to="/login" className={style.link}>Login</Link></li><button><Link to="/register"className={style.link}>Sign Up</Link></button></>:<li><Link to="/profile"className={style.link}>Profile</Link></li>}   
            </div>
      </ul>
        </div>  
    </nav>
  );
}
