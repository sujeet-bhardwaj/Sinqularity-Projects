import React from 'react'
import style from './Skills.module.css'
import {SkillsInfo} from  "../../random/Skills"
const Skills = () => {
  return (
    <div className={style.skillcontainer}>
      <div id="skills" className={style.skill}>SKILLS
        <hr className={style.hr}/>
      </div>

<div className={style.container}>
        {SkillsInfo.map((skill, index) => (
          <div key={index} className={style.block}>
            <h3 className={style.title}>{skill.title}</h3>
            <div className={style.skillsGrid}>
              {skill.skills.map((logo, i) => (
              
                  <div key={i} className={style.text}>
                  <img src={logo.logo} alt={logo.name} className={style.skillLogo} />
                  <p className={style.name}>{logo.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
