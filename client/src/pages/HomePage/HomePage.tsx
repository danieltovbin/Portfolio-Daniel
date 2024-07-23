import Header from '../../components/Header/Header';
import About from '../../components/HomePage/About/About';
import Contact from '../../components/HomePage/Contact/Contact';
import Home from '../../components/HomePage/Home/Home';
import Projects from '../../components/HomePage/Projects/Projects';
import Skills from '../../components/HomePage/Skills/Skills';
import './style.scss';

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