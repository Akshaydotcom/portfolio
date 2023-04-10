import './Navbar.css'
import pdf from './Resume.pdf'
export const Navbar=()=>{

    return(
        <div className="navbar">
            <ul>
          <li>Logo</li>
          <li><a href="#AboutMe">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li>Work Experience</li>
          <li><a href="#ContactMe">Contact Me</a></li>
        </ul>
        <a href={pdf} download="Resume_Akshay"><button>Resume</button></a>
        </div>
    )
}