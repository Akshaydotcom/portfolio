import React from 'react';
import './AboutMe.css';
// import Me from './kevin-ku-aiyBwbrWWlo-unsplash.jpg'
import Me2 from './daniel-korpai-HyTwtsk8XqA-unsplash.jpg'
export const AboutMe=()=>{
    return(
    
    <div className='main' id='AboutMe'>
        <div>
        <p>Hi, I am Akshay, a budding Web Developer with a passion for building awesome-looking websites using ReactJs and Node. With over 3 years of experience in web development, I have worked on a variety of projects with large enterprise applications. <br/>
        </p>
        <p>
        I specialize in developing responsive, user-friendly, and highly-functional websites using ReactJs, Node, HTML5, CSS3, and JavaScript. <br/>
        Currently a Graduate student at Santa Clara University, so if You are looking for a frontend developer, I'd love to chat about potential opportunities to work together.
        </p>
        <p>
        When I'm not coding or building, you can find me playing the guitar, watching movies or playing video games. 
        
        </p>
        </div>
        <div className='img-container'>
        <img src={Me2} alt=''/>
        </div>
    </div>)
}