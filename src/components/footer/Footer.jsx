import React from 'react'
import './Footer.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (

    <footer>

    <a href="#header" className='footer_logo'>Otis</a>
          
      <ul className='permalinks'>
        <li><a href='#header'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#portfolio'>Projects</a></li>
        <li><a href='#expirience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>        
        
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="permalinks"> 
      
          <a href="https://github.com/otis-ke" target="_blank" rel="noreferrer"><FaGithub/></a>
           <a href="https://www.linkedin.com/in/vincent-otis-1315b0235" target="_blank" rel="noreferrer"><FaLinkedinIn/></a>
           <a href="https://twitter.com/otinaughty" target="_blank" rel="noreferrer"><BsTwitterX /></a>
         
      
        
    </div>
      <div className="footer_copyright">
        <small>&copy; Vincent Otis 2024 . All rights reserved.</small>
      </div>
      
      </footer>
     
  )
}

export default Footer
