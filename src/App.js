import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './App.css';
import { AboutMe } from './AboutMeSection/AboutMe';
import particlesconfig from './particles-config';
import { Navbar } from './components/Navbar';
import { Intro } from './Introduction/Intro';
import {Projects} from './Projects/Projects';
import { ContactMe } from './contactMe/ContactMe';
import { WorkEx } from './WorkEx/WorkEx';
import React from 'react';
function App() {
  const particlesInit = async (main) =>{
    await loadFull(main);
  }
  return (
    <div className="App">
      <Navbar /> 
      <section><Intro /></section>
      <section><AboutMe/></section>
      <section><WorkEx /></section>
      <section><Projects /></section>
      <section><ContactMe /></section>
      <Particles id="particles-here" init={particlesInit} options={particlesconfig}/>
    </div>
  );
}

export default App;
