import React from 'react'
import './Services.css'

import { GiBulletBill } from "react-icons/gi";
const Services = () => {
  return (
   <section id='services'>
     <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
      <article className="services">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              < GiBulletBill className="service_list-icon" />
              <p> Responsive web design for a seamless user experience on various devices.</p>
            </li>
            <li>
              <GiBulletBill  className="service_list-icon" />
              <p>Front-end development using modern technologies like React.js.</p>
            </li>
            <li>
              <GiBulletBill  className="service_list-icon" />
              <p> Website optimization for improved performance and SEO.</p>
            </li>
          </ul>
        </article>

        <article className="services">
          <div className="service_head">
            <h3>Mobile Development </h3>
          </div>
          <ul className="service_list">
            <li>
              < GiBulletBill className="service_list-icon" />
              <p>Cross-platform mobile app development with React Native.</p>
            </li>
            <li>
              <GiBulletBill  className="service_list-icon" />
              <p>Native Android app development with a focus on material design.</p>
            </li>
            <li>
              <GiBulletBill  className="service_list-icon" />
              <p> Comprehensive testing, debugging, and optimization for mobile apps.</p>
            </li>
          </ul>
        </article>

        <article className="services">
          <div className="service_head">
            <h3>Desktop App Development</h3>
          </div>
          <ul className="service_list">
            <li>
              < GiBulletBill className="service_list-icon" />
              <p>VB.NET development for feature-rich Windows desktop applications. </p>
            </li>
            <li>
              <GiBulletBill  className="service_list-icon" />
              <p>Database management systems for efficient data storage and retrieval.</p>
            </li>
            <li>
              <GiBulletBill  className="service_list-icon" />
              <p>Customized Point of Sale (POS) systems and SAP integration solutions.</p>
            </li>
          </ul>
        </article>

        

      </div>
   </section>
  )
}

export default Services
