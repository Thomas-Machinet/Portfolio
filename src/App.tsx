import './App.css'
// Import Data
import data from './data/project.js';
import skillFrontEnd from './data/skillFrontEnd.js';

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
      <Header />
      <main className="main">
        <Portrait />
        <Reveal>
          <Project data={data} />
        </Reveal>

        <Skill skillFrontEnd={skillFrontEnd} />
        <Contact />
      </main >
      <footer className="footer">
        <Footer />
      </footer>
    </>
  )
}

export default App
