import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";

const HeaderSocials = () => {
  return (
<div className='header_socials'>
    
           <a href="https://github.com/otis-ke" target="_blank" rel="noreferrer"><ImGithub /></a>
           <a href="https://www.linkedin.com/in/vincent-otis-1315b0235" target="_blank" rel="noreferrer"><FaLinkedin /></a>
           <a href="https://twitter.com/otinaughty" target="_blank" rel="noreferrer"><FaSquareXTwitter  /></a>
         
    </div>
  )
}

export default HeaderSocials