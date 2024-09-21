import Navbar from "./sections/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";
import BackgroundShader from "./common/BackgroundShader"; // Lägg till importen
import "./App.css";

function App() {
  return (
    <div className="App">
      <BackgroundShader />  {/* Lägg till bakgrundsshader-komponenten här */}
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
