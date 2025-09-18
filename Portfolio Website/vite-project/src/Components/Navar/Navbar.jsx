import React, { useState,useEffect } from 'react'
import style from './Navbar.module.css'
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
   const [Scroll,setScroll]=useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
      const openmenu = () => {
    setMenuOpen(!menuOpen); 
  };
useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
  }, []);
  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`${style.navbar} ${Scroll ? style.scrolled : ""}`}>
    <div className={style.logo}>
  <span className={style.color}>&lt;</span>
  <span className={style.text}>Sujeet</span>     
  <span className={style.color}>/</span>
  <span className={style.text}>Kumar</span>
  <span className={style.color}>&gt;</span>
  </div>
    <ul className={`${style.menu} ${menuOpen ? style.active : ""}`}>
      <li>
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            offset={-70}
             onClick={handleMenuItemClick}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} offset={-70}  onClick={handleMenuItemClick}  >
            Skills
          </Link>
        </li>
 <li>
          <Link 
            to="education" 
            smooth={true} 
            duration={500} 
            offset={-70} 
             onClick={handleMenuItemClick}
          >
          Education
          </Link>
        </li>
 <li>
          <Link to="work" smooth={true} duration={500} offset={-70}  onClick={handleMenuItemClick} >
            Projects
          </Link>
        </li>
 <li>
          <Link to="contact" smooth={true} duration={500} offset={-70}   onClick={handleMenuItemClick} >
            Contact
          </Link>
        </li>
    </ul>
 <div className={style.connect}>
   <Link to="contact" smooth={true} duration={500} offset={-70}>
              Connect With Me 
          </Link>
 </div>
<div className={style.menuicon}>
  <GiHamburgerMenu onClick={openmenu}/>
</div>

    </div>
  )
}

export default Navbar
