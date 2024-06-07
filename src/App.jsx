import React from 'react'

import Hero from './components/Hero'
import Footer from './components/Footer'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Brief from './components/Brief'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Brief/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Contact/>
    <Footer/>

    
    </>
  )
}

export default App