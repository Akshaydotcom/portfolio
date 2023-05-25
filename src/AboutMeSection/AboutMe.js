import React from 'react';
import './AboutMe.css';
import Me from './Passport-Akshay.jpg';
// import Me2 from './daniel-korpai-HyTwtsk8XqA-unsplash.jpg'
export const AboutMe=()=>{
    return(
    
    <div className='main' id='AboutMe'>
        <div className='text-container'>
        <p>Hi, I am a budding Web Developer with a passion for building awesome-looking websites using ReactJs and Node. With over 3 years of experience in web development, I have worked on a variety of projects with large enterprise applications. <br/>
        </p>
        <p>
        I specialize in developing responsive, user-friendly, and highly-functional websites using ReactJs, Node, HTML5, CSS3, and JavaScript. <br/>
        Currently a graduate student at Santa Clara University, so if you are looking for a frontend or full-stack developer, I'd love to chat about potential opportunities to work together.
        </p>
        <p>
        When I'm not coding or working, you can find me playing the guitar, modding custom mechanical keyboards or playing video games. 
        </p>
        </div>
        <div className='img-container'>
        <img src={Me} alt=''/>
        </div>
    </div>)
}