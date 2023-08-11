import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub, BsStackOverflow} from 'react-icons/bs'
import {SiLeetcode} from "react-icons/si";

const Footer= () =>{
    return(
        <footer>
            <a href="#" className='footer_logo'> Rishabh Gupta </a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#qualifications">Qualifications</a></li>
                <li><a href="#projects">Projects</a></li>
                {/* <li><a href="#testimonials">Testimonials</a></li> */}
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer_socials">
                <a href="https://www.linkedin.com/in/rishabh-gupta-432a98195/" target='_blank'><BsLinkedin /></a>
                <a href="https://leetcode.com/guptarishabh1122/" target='_blank'><SiLeetcode /></a>
                <a href="https://github.com/rishgupta2301" target='_blank'><BsGithub /></a>
            </div>

            <div className="footer_copyright">
                <small>&copy; Rishabh Gupta. All rights reserved</small>
            </div>
        </footer>
    );
}

export default Footer