import React, { useState } from 'react';
import './Nav.css';
import { IoHomeOutline } from 'react-icons/io5';
import { LuUser2 } from 'react-icons/lu';
import { IoBookOutline } from 'react-icons/io5';
import { TbDeviceImac } from 'react-icons/tb';
import { TiMessages } from 'react-icons/ti';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#header');

  return (
    <nav>
      
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <LuUser2 />
      </a>
      <a href="#expirience" onClick={() => setActiveNav('#expirience')} className={activeNav === '#expirience' ? 'active' : ''}>
        <IoBookOutline />
      </a>
       <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}>
        <IoHomeOutline />
      </a>

      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''} >
        <TbDeviceImac />
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} >
        <TiMessages />
      </a>
    </nav>
  );
};

export default Nav;
