import React from "react";
import style from "./Mywork.module.css";
import { projects } from "../../random/Project";
import { FaGithub } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
const Mywork = () => {
  return (
    <div id="work" className={style.mywork}>
      <div className={style.title}>
        <h1>My Latest Work</h1>
        <hr  className={style.hr}/>
      </div>
      <div className={style.container}>
        {projects.map((work, index) => (
          <div key={index} className={style.box}>
            <div>
            <img src={work.image} alt={work.id} />
            </div>
            <div className={style.bottom}>
              <h2>{work.title}</h2>
              <p>{work.description}</p>
              <div className={style.tech}>
                {work.tags.map((tech, index) => (
                  <div className={style.techno}>
                    {tech}
                  </div>
                ))}
              </div>
              <div className={style.git}>
                      <a 
                      href={work.github} 
                      target="_blank" 
                    >
                      <FaGithub size={30} />
                    <a href={work.livelink} target="_blank">
                      <MdOutlineLiveTv size={30} />
                    </a>
                    </a>

                    </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mywork;
