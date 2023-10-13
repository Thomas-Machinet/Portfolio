import './App.css'
// Import Data
import projectData from './data/project.ts';
import skillFrontEndData from './data/skillFrontEnd.ts';
import logo from '/Logo.png'

// importation components
import Header from './components/Header/Header';
import Portrait from './components/Portrait/Portrait';
import Project from './components/Project/Project';
import Skill from './components/Skills/Skill.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';
import { Reveal } from './utils/Reveal.js';

import { ArrowUpCircle } from 'react-feather';






function App() {

  const isMobile = window.innerWidth <= 768

  return (
    <>
      {!isMobile &&
        <a href='#'
          className='arrowUp'><ArrowUpCircle size="50px" /></a>
      }
      <img className='logo'
        src={logo}
        alt='logo' />
      <Header />
      <main className="main">
        <Portrait />
        <Reveal>
          <Project data={projectData} />
        </Reveal>

        <Skill skillFrontEnd={skillFrontEndData} />
        <Contact />
      </main >
      <footer className="footer">
        <Footer />
      </footer>
    </>
  )
}

export default App
