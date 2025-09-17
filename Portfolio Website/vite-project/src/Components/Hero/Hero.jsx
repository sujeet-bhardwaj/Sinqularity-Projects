import style from './Hero.module.css'
import { Link } from 'react-scroll'
import Untitled from '../../assets/image.png'
const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.left}>
        <div className={style.text}>
    <h1>Hi, I'm <span>Sujeet Kumar</span></h1>
<h2>I build modern<span> MERN Stack</span> applications</h2>
<p>
  I'm a passionate Full Stack Developer specializing in creating scalable, 
  high-performance web applications with the MERN stack. 
 
</p>
      </div>
        <div className={style.buttons}>
          <div className={style.connect}>
            <Link to="contact" smooth={true} duration={500} offset={-70}>
                        Connect With Me 
                    </Link>
                    </div>
             <div className={style.resume}>
  <a href="https://drive.google.com/file/d/1Y5S4IDYs9sMqjLB_0abZJhP8zCUVQ61F/view?usp=sharing" download  target='_blank'>
   My Resume
  </a>
      </div>
        </div>
      </div>
 <div className={style.right}>
       <img src={Untitled} alt="" />
      </div>
    </div>
  )
}

export default Hero
