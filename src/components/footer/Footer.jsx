import React from 'react'
import './Footer.css'
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";

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
      
      <a href="https://github.com/otis-ke" target="_blank" rel="noreferrer"><ImGithub /></a>
           <a href="https://www.linkedin.com/in/vincent-otis-1315b0235" target="_blank" rel="noreferrer"><FaLinkedin /></a>
           <a href="https://twitter.com/otinaughty" target="_blank" rel="noreferrer"><FaSquareXTwitter  /></a>
         
      
        
    </div>
      <div className="footer_copyright">
        <small>&copy; Vincent Otis 2024. All rights reserved.</small>
      </div>
      
      </footer>
     
  )
}

export default Footer
