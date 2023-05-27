import React from "react";
import "./Projects.css";
import RockPaperScissors from "./Rock-Paper-Scissors.png";
import CountryFinder from "./Country-Finder.png";
import { ArchivedProject } from "./archivedProjects";
export const Projects = () => {
  return (
    <section className="project--holder" id="projects">
      <h1>Here's What I've been upto</h1>
      <h3>Rock Paper Scissors</h3>
      <div className="projects first">
        <div className="image_container">
          <img src={RockPaperScissors} alt="RockPaperScissor" />
          <div className="overlay overlay_2">
            <a href="https://github.com/Akshaydotcom/rock-paper-scissor" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://agigabyte-rockpaperscissors.netlify.app/" target="_new" className="websiteLink"><svg width="800px" height="800px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#000000" fill="none"><path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6"/><path d="M37.86,51.1A47,47,0,0,1,32,56.7"/><path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85"/><path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24"/><line x1="10.37" y1="19.9" x2="53.75" y2="19.9"/><line x1="32" y1="6.99" x2="32" y2="56.7"/><line x1="11.05" y1="45.48" x2="37.04" y2="45.48"/><line x1="7.14" y1="32.46" x2="56.86" y2="31.85"/><path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z"/></svg></a>
          </div>
        </div>
        <div>
          <p>
            This project is a modern-day version of the classic game Rock Paper
            Scissors with exciting twists. Built with React and Vanilla CSS, it
            allows players to view the history of all choices and is fully
            compatible with both desktop browsers and mobile devices.
            <br /> <br/> One of its notable features is the Pro mode, designed for
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
      <h3>Country Finder</h3>
      <div className="projects second">
        <div>
          <p className="padding-right">
            This is a web application that provides users with information about
            all countries in the world. It utilizes the rest-countries API to
            fetch data and allows users to search and filter countries based on
            various criteria such as region, language. <br /> <br />
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
        <div className="image_container">
        <img src={CountryFinder} alt="Country Finder" />
        <div className="overlay overlay_2">
            <a href="https://github.com/Akshaydotcom/countryfinder" ><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://agigabyte-countryfinder.netlify.app" target="_new" className="websiteLink"><svg width="800px" height="800px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#000000" fill="none"><path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6"/><path d="M37.86,51.1A47,47,0,0,1,32,56.7"/><path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85"/><path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24"/><line x1="10.37" y1="19.9" x2="53.75" y2="19.9"/><line x1="32" y1="6.99" x2="32" y2="56.7"/><line x1="11.05" y1="45.48" x2="37.04" y2="45.48"/><line x1="7.14" y1="32.46" x2="56.86" y2="31.85"/><path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z"/></svg></a>
          </div>
          </div>
      </div>
      <h3>Archived Projects</h3>
      <div className="archiveDivHolder">
      <ArchivedProject title="Where's My Charger" content1="Obtained location and trip information data from infrastructure stakeholders" content2="Used INRIX data sources to gather information on most likely location candidates for placing a new charging station" content3="Received Honourable Mention at INRIX Hackathon held in Santa Clara University in November 2022."/>
      <ArchivedProject title="Short the URL" content1="Web-App to shorten URLs using short-code API, sessionStorage API-A HTML5 Web Storage API to store data after refreshing browser tab." content2="CSS and Material UI for styling and Google Fonts for Letters and Numbers." content3="" githubLink="https://github.com/Akshaydotcom/url-shortening-api" websiteLink="https://agigabyte-urlshortener.netlify.app/"/>
      <ArchivedProject title="Sales and Inventory Management System" content1="Designed and implemented a sales and inventory management system where customers could place orders for items available at a Computer Repair Shop." content2="Implemented various PL/SQL procedures and functions that cover functionalities including: creating a customer order, checking availability of items, computing total amount for an order, displaying items of an order, etc"/>
      </div>
      <div className="archiveDivHolder">
      <ArchivedProject title="Order Action modal" content1="Developed a modal component, utilizing React framework for a marketplace application. Implemented functionality to retrieve and display order information from a remote API." content2="Calculated and displayed various financial metrics related to the sale, including selling price, commission, seller fee, and earnings." content3="Integrated acceptance and rejection of sales functionality with corresponding API calls." websiteLink="https://agigabyte-modal.netlify.app" githubLink="https://github.com/Akshaydotcom/Bezel-programming-challenge"/>
      </div>
    </section>
  );
};
