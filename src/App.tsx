import './App.css'

// Import Data
import data from './data/project.js';
import skillFrontEnd from './data/skillFrontEnd.js';

// importation components
import Header from './components/Header/Header';
import Portrait from './components/Portrait/Portrait';
import Project from './components/Project/Project';
import Skill from './components/Skills/Skill.js';


function App() {


  return (
    <>
      <Header />
      <main className="main">
        <Portrait />
        <Project data={data} />
        <Skill skillFrontEnd={skillFrontEnd} />
      </main>
    </>
  )
}

export default App
