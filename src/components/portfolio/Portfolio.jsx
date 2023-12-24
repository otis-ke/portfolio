import React from 'react';
import './Portfolio.css';
import weather from '../../assets/weathersearch.jpg';
import compare from '../../assets/lokesheni.jpg';
import shop from '../../assets/shop2.jpg';
import location from '../../assets/newpia.jpg';
import calculator from '../../assets/last calc.jpg';
import port from '../../assets/port.png';
import tictac from '../../assets/tic.jpg';
import grp from '../../assets/grp.jpg';
import bnb from '../../assets/bnb.jpg';
import inventory from '../../assets/inventory.jpg';
import hospital from '../../assets/hospitaliii.jpg';
import pharmarcy from '../../assets/pharmarcy.jpg';
import farm from '../../assets/imagesfarm.jpg';


const projects = [
  { id: 1, title: 'Weather Search', image: weather, githubLink: 'https://github.com/otis-ke/Weathersearch.github.io', liveDemoLink: 'https://otis-ke.github.io/Weathersearch.github.io/' },
  { id: 2, title: 'Compare location', image: compare, githubLink: 'https://github.com/otis-ke/user_location_compare.github.io', liveDemoLink: ' https://otis-ke.github.io/user_location_compare.github.io/' },
  { id: 3, title: 'Closet app', image: shop, githubLink: 'https://github.com/otis-ke/veemcloset.github.io', liveDemoLink: 'https://otis-ke.github.io/veemcloset.github.io/' },
  { id: 4, title: 'Get location', image: location, githubLink: 'https://github.com/otis-ke/location_user.github.io', liveDemoLink: 'https://otis-ke.github.io/location_user.github.io/' },
  { id: 5, title: 'Calculator', image: calculator, githubLink: 'https://github.com/otis-ke/calculator.github.io', liveDemoLink: ' https://otis-ke.github.io/calculator.github.io/' },
  { id: 6, title: 'Portfolio', image: port, githubLink: 'https://github.com/otis-ke/otiswebsite.github.io', liveDemoLink: 'https://otis-ke.github.io/otiswebsite.github.io/' },
  { id: 7, title: 'tic tac toe', image: tictac, githubLink: 'https://github.com/otis-ke/tictactoe.github.io', liveDemoLink: 'https://otis-ke.github.io/tictactoe.github.io/' },
  { id: 8, title: 'group project', image: grp, githubLink: 'https://github.com/otis-ke/alxportfolioproject.github.io', liveDemoLink: 'https://otis-ke.github.io/alxportfolioproject.github.io/' },
  { id: 9, title: 'Airbnb clone', image: bnb, githubLink: 'https://github.com/otis-ke/AirBnB_clone_v4', liveDemoLink: '' },
  { id: 10, title: 'Hospital managment system', image: hospital, githubLink: 'https://github.com/otis-ke/hospital_management-system', liveDemoLink: '' },
  { id: 11, title: 'inventory Management system', image: inventory, githubLink: 'https://github.com/otis-ke/notisinventory', liveDemoLink: '' },
  { id: 12, title: 'Pharmarcy management POS-system', image: pharmarcy, githubLink: 'https://github.com/otis-ke/pharmacy', liveDemoLink: '' },
  { id: 13, title: 'Farm management system', image: farm, githubLink: 'https://github.com/otis-ke/mwea_farm-system-', liveDemoLink: '' },
  
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container project_container">
        {projects.map((project) => (
          <article key={project.id} className="project_item">
            <div className="project_item-image">
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <div className="project-item-cta">
              <a href={project.githubLink} className='btn' target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a
                href={project.liveDemoLink}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
