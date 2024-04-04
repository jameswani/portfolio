import './styles/Portfolio.css';
import NavBar from './pages/NavBar.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import {Footer} from './pages/Footer.jsx';

function App() {
  return (
    <div className="App">
    
        <NavBar />
        <About />
        <Projects/>
        <Footer/>
    </div>
  );
}

export default App;
