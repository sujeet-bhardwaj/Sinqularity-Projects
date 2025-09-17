import React from 'react'
import Navbar from './Components/Navar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Mywork from './Components/MyWork/Mywork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Skills from './Components/Skills/Skills'
import Education  from './Components/Education/Education'
const App = () => {
  return (
    <div>
     <Navbar></Navbar>
     <Hero></Hero>
     <About></About>
     <Skills></Skills>
     <Education></Education>
     <Mywork></Mywork>
     <Contact></Contact>
     <Footer></Footer>
    </div>
  )
}

export default App
