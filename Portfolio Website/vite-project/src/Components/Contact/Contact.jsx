import React, { useState } from "react";
import style from "./Contact.module.css";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [result, setResult] = useState(""); 

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "38e662b0-0afd-4fd5-871c-dac15c6e630e");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      setResult("Form submitted successfully");
      event.target.reset();
    } else {
      setResult("Something went wrong");
    }
  };

  return (
    <div id="contact" className={style.contact}>
      <div className={style.title}>
        <h1>Get In Touch</h1>
        <hr  className={style.hr}/>
      </div>
      <div className={style.section}>
        <div className={style.left}>
          <h1>Let's talk</h1>
          <p>I am currently available to take new projects, so feel free</p>
          <div className={style.details}>
           <MdEmail />
            <p>sujeetbhardwaj9580@gmail.com</p>
          </div>
          <div className={style.details}>
           <FaPhone />
            <p>9580728278</p>
          </div>
          <div className={style.details}>
           <FaLocationDot />
            <p>Varanasi,Uttar Pradesh India </p>
          </div>
           <div className={style.social}>
               <a 
        href="https://www.linkedin.com/in/sujeet-kumar-software/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaLinkedin size={30} />
      </a>
                 <a 
        href="https://github.com/sujeet-bhardwaj" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaGithub size={30} />
      </a>
           </div>
        </div>
        <div className={style.right}>
          <form onSubmit={onSubmit} className={style.rightform}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Enter Your Name" required />

            <label>Your Email</label>
            <input type="email" name="email" placeholder="Enter Your Email" required />

            <label>Write Your Message Here</label>
            <textarea name="message" rows="7" placeholder="Enter Your Message" required></textarea>

            <button type="submit" className={style.submit}>
              Submit Now
            </button>
          </form>

          {result && <p>{result}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
