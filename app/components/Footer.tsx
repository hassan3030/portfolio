import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
    
  <footer className="footer mt-10">
    <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    </div>
    <ul className="social-icon">
      <li className="social-icon__item"><a className="social-icon__link" href="https://www.facebook.com/hassanHamdiashour" target='_blank'>
          <FaFacebook/>
        </a></li>
      
      <li className="social-icon__item"><a className="social-icon__link" href="https://www.linkedin.com/in/hassan-hamdia" target='_blank'>
          <FaLinkedin/>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="https://github.com/hassan3030/" target='_blank'>
          <FaGithub/>
        </a></li>
    </ul>
    <ul className="menu">
      <li className="menu__item"><a className="menu__link" href="#home">Home</a></li>
      <li className="menu__item"><a className="menu__link" href="#">About</a></li>
      <li className="menu__item"><a className="menu__link" href="#projects">Services</a></li>
      <li className="menu__item"><a className="menu__link" href="#contact">Contact</a></li>

    </ul>
    <p>hassan.hamdi.dev@gmail.com</p>
    <p>Tel : 01021620397 </p>

    <p>&copy;2024 Hassan Hamdi | All Rights Reserved</p>
  </footer>
  
    </div>
  )
}

export default Footer