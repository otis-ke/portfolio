import React from 'react'
import './about.css'
import Me from '../../assets/aboutotis.jpg'
import { TbDeviceImac } from "react-icons/tb";
import { GiTrophy } from "react-icons/gi";
import { FaCode } from "react-icons/fa";

const About = () => {
  return (
    <section id='about'>
      <h5>Allow Me To</h5>
      <h2> Introduce Myself</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="About me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <GiTrophy className="about_icon" />
              <h5>Experience</h5>
              <small>2+ In Tech </small>
            </article>
           
            <article className="about_card">
              < TbDeviceImac className="about_icon" />
              <h5>Projects</h5>
              <small>20+ projects completed</small>
            </article>
            <article className="about_card">
              <FaCode className="about_icon" />
              <h5>Languges</h5>
              <small> 10+  programming languages</small>
            </article>
          </div>
          <p>I'm a skilled fullstack software engineer with a specialization in front-end development, 
            particularly adept at crafting engaging user interfaces using the power of ReactJs and many other front end technologies
            <br />
            
            <br />
            I'm open to Full-stack (remote/onsite) opportunities with a passion of Front-end development.
            If you like what you see and have a project you need coded, 
            don’t hestiate to contact me.
          </p>
          <a href="#portfolio" className="btn btn-primary"> See my projects</a>
        </div>
      </div>
    </section>
  )
}

export default About
