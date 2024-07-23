import React from 'react';
import Header from '../../components/Header/Header';
import './style.scss'
import Home from '../../components/HomePage/Home/Home';
import About from '../../components/HomePage/About/About';
import Skills from '../../components/HomePage/Skills/Skills';
import Projects from '../../components/HomePage/Projects/Projects';
import Contact from '../../components/HomePage/Contact/Contact';

const HomePage = () => {
  return (
    <div>
        <Header />
        <div className='home-container'>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        </div>
    </div>
  )
}

export default HomePage