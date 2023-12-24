import React from 'react'
import './Expirience.css'
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandTypescript } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { SiNginx } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { TbFileTypeSql } from "react-icons/tb";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { TbBrandKotlin } from "react-icons/tb";
import { IoLogoAndroid } from "react-icons/io";
import { SiVisualstudio } from "react-icons/si";
import { PiFigmaLogo } from "react-icons/pi";
import { FaNode } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";

const Expirience = () => {
  return (
    <section id='expirience'>
       <h5>Get to know</h5>
      <h2>My Skills</h2>
      <div className="container experience_container">
      <div className="experience_frontend">
      <h3>Frontend Development</h3>
      <div className="experience_content">
      <article className="experience_details">  
      <FaHtml5 />
            <div>
                <h4>HTML</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>

            <article className="experience_details">
            <SiCss3 />
              <div>
               
                <h4>CSS</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="experience_details">
            < FaReact />
              <div>
               
                <h4>React</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience_details">
            < TbBrandJavascript/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
             <BiLogoTailwindCss />
              <div>
               
                <h4>Tailwind Css</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience_details">
            <TbBrandTypescript />
              <div>
               
                <h4>TypeScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
            <TbBrandReactNative />
              <div>
               
                <h4>ReactNative</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
            <SiFlask />
              <div>
               
                <h4>Flask</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
            <PiFigmaLogo  />
              <div>
               
                <h4>Figma</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
            <FaGitAlt />
              <div>
               
                <h4>Git</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

         </div>
       </div>

       <div className="experience_backend">
       <h3>Tech Stack</h3>
          <div className="experience_content">
          <article className="experience_details">
          <FaJava />
              <div>
               
                <h4>Java</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
            <BiLogoCPlusPlus />
              <div>
               
                <h4>C</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            
            <article className="experience_details">
            <TbBrandKotlin />
              <div>
               
                <h4>Kotlin</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
            <TbFileTypeSql />
              <div>
               
                <h4>Sql</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>


            <article className="experience_details">
            <SiVisualstudio />
              <div>
               
                <h4>Visual Basic.net</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
            <IoLogoAndroid />
              <div>
               
                <h4>Android Studio</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
            <FaNode />
              <div>
               
                <h4>Node js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
           
            <article className="experience_details">
            <FaPhp />
              <div>
               
                <h4>PhP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
            < SiNginx />
              <div>
               
                <h4>Nginx</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            
            
          </div>
       </div>
      </div>
    </section>
  )
}

export default Expirience
