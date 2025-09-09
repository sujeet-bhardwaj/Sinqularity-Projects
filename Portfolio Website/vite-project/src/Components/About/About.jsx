import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import style from "./About.module.css";

import Untitled from '../../assets/image.png'
const About = () => {
  return (
    <div id="about" className={style.about}>
      <div className={style.title}>
        <h1>About Me</h1>
        <hr className={style.hr}/>
      </div>
      <div className={style.section}>
        <div className={style.aboutleft}>
          <img src={Untitled} alt="" />
        </div>
        <div className={style.aboutright}>
          <div className={style.aboutpara}>
            <p>
              I’m a Full Stack Developer who loves solving problems with code. My journey in web development has been driven by curiosity and creativity—whether it’s building APIs, designing UIs, or deploying apps to the cloud. I’m always learning, growing, and excited to collaborate on meaningful projects.
            </p>
          </div>
        
   </div>
          </div>      
    </div>
  );
};

export default About;
