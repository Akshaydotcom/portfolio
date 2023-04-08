import './Navbar.css'
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
        </div>
    )
}