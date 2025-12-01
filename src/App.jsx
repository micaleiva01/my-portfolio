import Navbar from './components/Navbar';
import './App.css'
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';


function App() {

  return (
    <div id="top">

      <Navbar />

      <main className="main">
        <About />

        <Education />
        
        <Skills />
        
        <section id="projects" className='section'>
          <h2>Projects</h2>
          <p>placeholder text</p>
        </section>
        
        <section id="contact" className='section'>
          <h2>Contact</h2>
          <p>placeholder text</p>
        </section>
        
      </main>
    </div>
  )
}

export default App;
