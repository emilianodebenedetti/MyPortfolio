import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Biography from './components/Biography';
import Sites from './components/Sites';

function App() {
  return (
    <div className="App">
{/*       <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#biography">Biography</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#sites">Sites</a></li>
        </ul>
      </nav> */}

      <section id="home">
        <Home />
      </section>

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