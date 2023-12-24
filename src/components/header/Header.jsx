import React from 'react'
import './Header.css'
import me from '../../assets/cut.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id="header">
    <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Vincent Otis</h1>
      <h5 className="text-light"> Software Engineer</h5>
      <HeaderSocials />
      <div className='me'>
        <img src={me} alt="" />
      </div>
      

      <a href="#contact" className="scroll_down">
        Scroll Down
      </a>
    </div>
  </header>
  )
}

export default Header