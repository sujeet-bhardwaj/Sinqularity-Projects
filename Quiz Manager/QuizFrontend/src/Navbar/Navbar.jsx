import { Link } from 'react-router'
import day from '../assets/day.png'
import night from '../assets/night.png'
import style from "./Navbar.module.css"
import image from "../assets/default.png"
import { MyContext } from '../App';
import {useContext,useState} from 'react';
import {IoMdArrowDropdown} from "react-icons/io";
import { FaBars,FaTimes} from "react-icons/fa"; 
const Navbar = () => {
  const { login } = useContext(MyContext);
   const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
    const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <header className={style.body}>
      <div className={style.container}>
        <div className={style.title}>
          <h1>Quiz<span>Quest</span></h1>
        </div>
        <div className={style.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ?<FaTimes size={25} /> : <FaBars size={25} />}
        </div>
        <nav className={`${style.middlenav} ${menuOpen ? style.active : ""}`}>
          <ul className={style.middle}>
            <li><Link to="/">Home</Link></li>
            <li>
              <Link>
                Quiz <span><IoMdArrowDropdown className={style.quiz} /></span>
              </Link>
              <div className={style.dropdownMenu}>
                <ul>
                  <li><Link to="/quiz/create">Create Quiz</Link></li>
                  <li><Link to="/quiz/all">All Quiz</Link></li>
                  <li><Link to="/quiz/publish">Publish Quiz</Link></li>
                  <li><Link to="/quiz/unpublish">Unpublish Quiz</Link></li>
                </ul>
              </div>
            </li>
            <li><Link to="/practice">Practice</Link></li>
            <li><Link to="/user">User</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
          </ul>
        </nav>    
        <nav className={style.rightnav}>
          <ul>
            {login ? (
              <li>
                <Link to="/profile" className={style.profile}>
                  <img src={image} alt="" width="30" />
                </Link>
              </li>
            ) : (
              <div className={style.button}>
                <div>
                  <li><Link to="login" className={style.login}>Sign In</Link></li>
                </div>
                <div className={style.signup}>
                  <li><Link to="/register"><button>Sign Up</button></Link></li>
                </div>
              </div>
            )}
          </ul>
            <div className={style.theme} onClick={toggleTheme}>{theme==="light"? <img src={day} width="25" />: <img src={night} width="25" />}    
        </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;

