import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Expirience from './components/expirience/Expirience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Foooter from './components/footer/Footer'


const App = () => {
  return (
    <div>
      <>
      <Header />
      <Nav />
      <About />
      <Expirience />
      <Services />      
      <Portfolio />
      <Contact />
      <Foooter />
      </>
    </div>
  )
}

export default App
