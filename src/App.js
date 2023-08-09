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
import React, {useEffect, useRef} from 'react';
function App() {
  const particlesInit = async (main) =>{
    await loadFull(main);
  }

  const ref=useRef(null)

  useEffect(()=>{
    setTimeout(()=>{
      ref.current?.scrollIntoView({behavior:"smooth"});
    },[3000])
  },[])

  return (
    <div className="App">
      <Navbar /> 
      <section><Intro /></section>
      <section ref={ref}><AboutMe/></section>
      <section><WorkEx /></section>
      <section><Projects /></section>
      <section><ContactMe /></section>
      <footer style={{"color":"white","position":"sticky","textAlign":"center"}}>Made By Akshay Bhandary</footer>
      <Particles id="particles-here" init={particlesInit} options={particlesconfig}/>
    </div>
  );
}

export default App;
