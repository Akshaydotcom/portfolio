import React from "react";
import "./Projects.css";
import RockPaperScissors from "./Rock-Paper-Scissors.png";
import CountryFinder from "./Country-Finder.png";
export const Projects = () => {
  return (
    <section className="project--holder" id="projects">
      <h2>Here's What I've been upto</h2>
      <h2>Rock Paper Scissors</h2>
      <div className="projects first">
        <div className="image_container">
          <img src={RockPaperScissors} alt="RockPaperScissor" />
          <div className="overlay overlay_2">
            <a href="https://github.com/Akshaydotcom/rock-paper-scissor" title="github icons" className="icon">
            </a>
          </div>
        </div>
        <div>
          <p>
            This project is a modern-day version of the classic game Rock Paper
            Scissors with exciting twists. Built with React and Vanilla CSS, it
            allows players to view the history of all choices and is fully
            compatible with both desktop browsers and mobile devices.
            <br /> One of its notable features is the Pro mode, designed for
            fans of the hit TV Show The Big Bang Theory. With surprises and a
            sleek design, this game is sure to provide hours of fun for players
            of all ages.
          </p>
          <ul className="featured">
            <li>React</li>
            <li>CSS</li>
            <li>React Portals</li>
            <li>Netlify</li>
          </ul>
        </div>
      </div>
      <h2>Country Finder</h2>
      <div className="projects second">
        <div>
          <p className="padding-right">
            This is a web application that provides users with information about
            all countries in the world. It utilizes the rest-countries API to
            fetch data and allows users to search and filter countries based on
            various criteria such as region, language. <br />
            The application has a user-friendly interface that is optimized for
            mobile devices and features a dark and light mode for visual
            customization. The UI is styled using CSS and Bootstrap, while
            Google Fonts is used to enhance the typography of the application.
          </p>
          <ul className="featured">
            <li>React</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Rest Countries API</li>
          </ul>
        </div>
        <img src={CountryFinder} alt="Country Finder" />
      </div>
    </section>
  );
};
