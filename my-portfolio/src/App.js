import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Biography from './components/biography/Biography';
import Sites from './components/sites/Sites';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className='img-bg'>
        <Navbar/>
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