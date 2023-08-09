/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import './Navbar.css'
import pdf from './Resume.pdf'
import { useEffect } from 'react'
export const Navbar=()=>{
    const [navbarType, setNavbarType]=useState('')
    const [menu,setMenu]=useState('false')
    useEffect(()=>{
        if('ontouchstart' in window||navigator.maxTouchPoints>0) {
            if(window.innerWidth>600)
                setNavbarType('tablet');
            else
                setNavbarType('mobile');    
        }
        else setNavbarType('laptop')
    },[])

    const MenuOpen=()=>{
        menu?setMenu(false):setMenu(true)
    }
    return(
        <div className="navbar">
            <div style={{"display":"inline"}} onClick={()=>{window.scrollTo(0,0)}}>
                <svg>
                    <g id="SvgjsG2022" featurekey="symbolFeature-0" transform="matrix(0.7904245709123757,0,0,0.7904245709123757,-7.113821138211382,-10.808491418247515)" fill="#9dd3cc"><rect xmlns="http://www.w3.org/2000/svg" x="28" y="47" width="46" height="2"></rect><rect xmlns="http://www.w3.org/2000/svg" x="37" y="53" width="28" height="2"></rect><path xmlns="http://www.w3.org/2000/svg" d="M85.564,80H14.435C11.438,80,9,77.562,9,74.564V25.436C9,22.438,11.438,20,14.435,20h71.129C88.562,20,91,22.438,91,25.436  v49.129C91,77.562,88.562,80,85.564,80z M14.435,22C12.541,22,11,23.541,11,25.436v49.129C11,76.459,12.541,78,14.435,78h71.129  C87.459,78,89,76.459,89,74.564V25.436C89,23.541,87.459,22,85.564,22H14.435z"></path><path xmlns="http://www.w3.org/2000/svg" d="M22.197,35.306c-2.385,0-4.326-1.94-4.326-4.326s1.941-4.327,4.326-4.327c2.386,0,4.327,1.941,4.327,4.327  S24.583,35.306,22.197,35.306z M22.197,28.652c-1.283,0-2.326,1.044-2.326,2.327c0,1.282,1.043,2.326,2.326,2.326  s2.327-1.044,2.327-2.326C24.523,29.696,23.479,28.652,22.197,28.652z"></path><path xmlns="http://www.w3.org/2000/svg" d="M33.285,35.306c-2.385,0-4.326-1.94-4.326-4.326s1.941-4.327,4.326-4.327c2.386,0,4.327,1.941,4.327,4.327  S35.67,35.306,33.285,35.306z M33.285,28.652c-1.283,0-2.326,1.044-2.326,2.327c0,1.282,1.043,2.326,2.326,2.326  s2.327-1.044,2.327-2.326C35.611,29.696,34.567,28.652,33.285,28.652z"></path><path xmlns="http://www.w3.org/2000/svg" d="M44.373,35.306c-2.386,0-4.327-1.94-4.327-4.326s1.941-4.327,4.327-4.327c2.385,0,4.326,1.941,4.326,4.327  S46.758,35.306,44.373,35.306z M44.373,28.652c-1.283,0-2.327,1.044-2.327,2.327c0,1.282,1.044,2.326,2.327,2.326  s2.326-1.044,2.326-2.326C46.699,29.696,45.656,28.652,44.373,28.652z"></path></g>
                </svg>
            </div>
            {navbarType==='mobile'&& 
                <div style={{"display":"inline"}} onClick={MenuOpen}>
                    {menu && <svg className="hamburger-menu" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L20 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> <path d="M4 12L20 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> <path d="M4 6L20 6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> </g></svg>}
                    {!menu && <svg className="hamburger-menu" viewBox="0 0 1024 1024" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path></g></svg>}
                </div>
            }
            <div className={navbarType==='mobile'&&menu?"hidediv":"showdiv"}>
                <ul className={navbarType==='mobile'&&menu?"navbar-list hide":"navbar-list show"} >
                    <li onClick={MenuOpen}><a href="#AboutMe">About Me</a></li>
                    <li onClick={MenuOpen}><a href="#Work">Work Experience</a></li>
                    <li onClick={MenuOpen}><a href="#projects">Projects</a></li>
                    <li onClick={MenuOpen}><a href="#ContactMe">Contact Me</a></li>
                    <li onClick={MenuOpen}><a href={pdf} download="Resume_Akshay">Download Resume</a></li>
                </ul>
            </div>
        </div>
    )
}