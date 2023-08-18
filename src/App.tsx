import './App.css'

// importation components
import Header from './components/Header/Header'
import Portrait from './components/Portrait/Portrait'
import Project from './components/Project/Project'


function App() {


  return (
    <>
      <Header />
      <main className="main">
        <Portrait />
        <Project />
      </main>
    </>
  )
}

export default App
