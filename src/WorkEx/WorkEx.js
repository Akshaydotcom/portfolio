import React from 'react';
import Infosys from './Infosys_logo.svg.png'
import FIH from './FIH_logo.png'
import UBS from './UBS_Logo.svg'
import {Work} from './Work';
import './WorkEx.css'
export const WorkEx=()=>{
    let jd1="Designed and implemented a dashboard using React, JavaScript, and Redux, resulting in a 40% increase in efficiency in managing investment portfolios for clients. Integrated multiple Java-based proprietary REST APIs with the dashboard, reducing data retrieval time by 25% and improving overall system performance.Implemented automation test cases using Jest, resulting in a 30% reduction in manual testing effort and improving test accuracy by 95%."
    let jd2="Led and managed a team of 3 QA testers to conduct comprehensive manual UI and functional testing for 15 different applications, ensuring high-quality deliverables and a 30% reduction in post-release defects. Mentored new joiners to understand their projects and team processes. Collaborated with Onshore and Offshore Client Teams to carry out project hand-offs. Designed and improved front-end UI of the Client\’s web-app using HTML, CSS, JavaScript, and LESS Preprocessor, leading to a 20% increase in user engagement and a 25% decrease in bounce rate.";
    let jd3="Led a cross-functional team of 3 developers to design and integrate admin panel features using Node.js, Express, and Nunjucks on the proximity lab website dashboard to enhance the functionality of the proximity lab website. Connected the dashboard to MySQL Database ensuring efficient storage and retrieval of information while handling scalability and load balancing requirements. Implemented performance optimizations that reduced dashboard load times by 25% and increased user engagement by 40%, resulting in a higher retention rate among users";
    let jd4="Implemented update address functionality on the web portal, enhancing user experience and optimizing load times by 15%. Modified React Frontend and Flask backend to incorporate update address feature, ensuring seamless integration. Developed comprehensive test cases to validate API functionality, ensuring high-quality performance and reliability.";
    const [job,setJob]=React.useState("1");
    const onJobChange=(event)=>{
        setJob(event.target.id)
    }
    return(<div id="Work" className='main_workExp'>
        <h2>Places I have worked</h2>
        <div className='workExContainer'>
            <div className='workExCompany'>
                <ul>
                    <li onClick={event => onJobChange(event)} id="1">Chera Health LLC</li>
                    <li onClick={event => onJobChange(event)} id="2">Frugal Innovation Hub</li>
                    <li onClick={event => onJobChange(event)} id="3">UBS</li>
                    <li onClick={event => onJobChange(event)} id="4">Infosys</li>
                </ul>
            </div>
            <div className='workExCarousel'>
                {job && job==="1" && <Work  jd={jd4} jp={'Software Developer Intern'}/>}
                {job && job==="2" && <Work srcImg={FIH} jd={jd3} jp={'Full Stack Developer'} widthImg={"100%"} heightImg={"130px"}/>}
                {job && job==="3" && <Work srcImg={UBS} jd={jd1} jp={'Senior Frontend Engineer'} widthImg={"100%"} heightImg={"104px"}/>}
                {job && job==="4" && <Work srcImg={Infosys} jd={jd2} jp={'Frontend Engineer'} widthImg={"99%"} heightImg={"160px"}/>}
                
            </div>
        </div>
    </div>)
}