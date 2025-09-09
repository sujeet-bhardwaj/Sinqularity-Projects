import React from "react";
import style from "./Education.module.css";
import { education } from "../../random/Education";

const Education = () => {
  return (
    <div className={style.body} id="education">
      <div className={style.header}>
        <h2 className={style.title}>Education</h2>
        <hr  className={style.hr} />
      </div>
      <div className={style.timeline}>
        <div className={style.verticalLine}></div>
        {education.map((random, index) => (
          <div
            key={index}
            className={`${style.card} ${
              index % 2 === 0 ? style.right : style.left
            }`}
          >
            <div className={style.cardTop}>
              <img src={random.img} alt={random.school} className={style.image} />
              <div>
                <h3 className={style.degree}>{random.degree}</h3>
                <h4 className={style.school}>{random.school}</h4>
                <span className={style.date}>{random.date}</span>
              </div>
            </div>

            <div className={style.cardBottom}>
              <span className={style.grade}>{random.grade}</span>
              <p className={style.desc}>{random.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
