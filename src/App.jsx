import Navbar from './components/Navbar';
import './App.css'
import About from './components/About';
import Education from './components/Education';


function App() {

  return (
    <div id="top">

      <Navbar />

      <main className="main">
        <About />

        <Education />
        
        <section id="skills" className='section'>
          <h2>Skills</h2>
          <p>placeholder text</p>
        </section>
        
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
