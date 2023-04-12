import React from 'react';
import Infosys from './Infosys_logo.svg.png'
import FIH from './FIH_logo.png'
import UBS from './UBS_Logo.svg'
// import {Work} from './Work';
import './WorkEx.css'
export const WorkEx=()=>{
    // let jd1="Designed and implemented a dashboard using React, TypeScript and Redux to create different investment portfolios for a major global financial firm on basis of income and risk levels. Integrated multiple Java Based proprietary REST APIs with dashboard to persist data between different steps of the web app. Implemented automation test cases using Jest to test different components of the web app that reduced time spent in testing by as much as 30%"
    // const [windowOpen, setWindow] = React.useState(false);
    // const openWindow = () => {
    //     windowOpen ? setWindow(false) : setWindow(true);
    //   };
    return(<div id="Work" className='main_workExp'>
        <h2>Places I have worked</h2>
        <div>
            
            <img alt="" src={Infosys} className='bg-white' style={{"width":"37%"}}/>
            {/* {windowOpen && <Work />} */}
            <img alt="" src={FIH}  className='bg-white' style={{"width":"33%"}}/>
            <img alt="" src={UBS}  className='bg-white' style={{"width":"70%"}}/>
            
            
        </div>
    </div>)
}