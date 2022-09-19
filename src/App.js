import './App.css';
import Projects from './Projects';
import Tech from './Tech'
import Hero from './Hero';
import Nav from './Nav';
import Contact from './Contact';

function App() {
  
  return (
    <div className="App">
        <Nav/>
        <Hero/>
        <Tech/>
        <Projects/>
       <Contact/>
    </div>
  );
}

export default App;
