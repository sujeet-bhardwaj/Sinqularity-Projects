import React from 'react'
import style from './Footer.module.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className={style.footer}>
          <hr />
      <div className={style.footerbottom}>
    
            <p className={style.footerleft}></p>
            <div className={style.footerright}>
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect With Me</p>
            </div>
      </div>

    </div>
  )
}

export default Footer
