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
import { Animator, Fade, FadeIn, FadeOut, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, batch } from 'react-scroll-motion';



function App() {

  const isMobile = window.innerWidth <= 768;
  return (
    <>
      <Header />
      {!isMobile &&
        <main className="main">
          <ScrollContainer>
            <ScrollPage>
              <Animator animation={batch(Fade(), MoveOut(500, 0))}>
                <Portrait />
              </Animator>
            </ScrollPage>
            <ScrollPage>
              <Animator animation={batch(Fade(), Sticky(), MoveIn(1000, 0))}>
                <Project data={data} />
              </Animator>
            </ScrollPage>
            <ScrollPage>
              <Animator animation={batch(Fade(), Sticky(), MoveIn(1000, 0))}>
                <Skill skillFrontEnd={skillFrontEnd} />
              </Animator>
            </ScrollPage>
            <ScrollPage>
              <Animator animation={batch(FadeIn(), Sticky(), MoveIn(-1000, 0))}>
                <Contact />
              </Animator>
            </ScrollPage>
          </ScrollContainer>
        </main >
      }
      {
        isMobile &&
        <main className="main">
          <Portrait />
          <Project data={data} />
          <Skill skillFrontEnd={skillFrontEnd} />
          <Contact />
        </main>
      }
      <footer className="footer">
        <Footer />
      </footer>
    </>
  )
}

export default App
