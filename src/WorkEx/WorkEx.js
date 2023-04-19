import React from 'react';
import Infosys from './Infosys_logo.svg.png'
import FIH from './FIH_logo.png'
import UBS from './UBS_Logo.svg'
import {Work} from './Work';
import './WorkEx.css'
export const WorkEx=()=>{
    let jd1="As a Front-end developer, I was responsible for designing and implementing a dashboard that allowed a major global financial firm to create and manage different investment portfolios based on income and risk levels. Using React, JavaScript, and Redux, I created a robust and scalable solution that met the Client's complex requirements and exceeded their expectations."
    let jd2="As a Front-end developer, I was responsible for designing and improving the user interface (UI) of the Client's web application. Using HTML, CSS, JavaScript, and the LESS preprocessor, I created visually appealing and responsive UI elements that enhanced the user experience (UX) and made it easier for users to navigate and interact with the web app. ";
    let jd3="As a Full Stack developer, I was responsible for developing and implementing new admin panel features on the Proximity Lab website dashboard. Using NodeJS, Express, and Nunjucks, I created robust and efficient solutions that improved the user experience and made it easier for administrators to manage the website's content and settings.";
    const [job,setJob]=React.useState("1");
    const onJobChange=(event)=>{
        setJob(event.target.id)
    }
    return(<div id="Work" className='main_workExp'>
        <h2>Places I have worked</h2>
        <div className='workExContainer'>
            <div className='workExCompany'>
                <ul>
                    <li onClick={event => onJobChange(event)} id="1">Frugal Innovation Hub</li>
                    <li onClick={event => onJobChange(event)} id="2">UBS</li>
                    <li onClick={event => onJobChange(event)} id="3">Infosys</li>
                </ul>
            </div>
            <div className='workExCarousel'>
                {job && job==="1" && <Work srcImg={FIH} jd={jd3} jp={'Full Stack Developer'} widthImg={"100%"} heightImg={"130px"}/>}
                {job && job==="2" && <Work srcImg={UBS} jd={jd1} jp={'Senior Frontend Engineer'} widthImg={"100%"} heightImg={"104px"}/>}
                {job && job==="3" && <Work srcImg={Infosys} jd={jd2} jp={'Frontend Engineer'} widthImg={"99%"} heightImg={"160px"}/>}
                
            </div>
        </div>
    </div>)
}