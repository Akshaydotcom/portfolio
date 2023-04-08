import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './App.css';
import { AboutMe } from './AboutMeSection/AboutMe';
import particlesconfig from './particles-config';
import { Navbar } from './components/Navbar';
import { Intro } from './Introduction/Intro';
import { Projects } from './ProjectsSection/Projects';
import { ContactMe } from './contactMeSection/ContactMe';
function App() {
  const particlesInit = async (main) =>{
    await loadFull(main);
  }
  return (
    <div className="App">
      <Navbar /> 
      {/* todo add responsive web design elements */}
      <Intro />
      <AboutMe/>
      <Projects />
      <ContactMe />
      <Particles id="particles-here" init={particlesInit} options={particlesconfig}/>
    </div>
  );
}

export default App;
