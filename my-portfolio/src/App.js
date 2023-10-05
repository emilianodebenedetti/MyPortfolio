import './App.css';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Biography from './components/biography/Biography';
import Sites from './components/sites/Sites';


function App() {
  return (
    <div className="App">
      <div className='img-bg'>
        <nav className='navbar'>
          <ul className=''>
            <li><a href="#home">INICIO</a></li>
            <li><a href="#biography">SOBRE MI</a></li>
            <li><a href="#projects">PROYECTOS</a></li>
            <li><a href="#sites">SITIOS</a></li>
          </ul>
        </nav>

        <section id="home"className='home-class'>
            <Home />
        </section>
      </div>

      <section id="biography">
        <Biography />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="sites">
        <Sites />
      </section>
    </div>
  );
}

export default App;