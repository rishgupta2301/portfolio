import React from 'react';
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Rishabh_gupta_blob.jpg'
import HeaderSocials from "./HeaderSocials";
import ScrollAnimation from 'react-animate-on-scroll';

const Header =() =>{
    return(
        <ScrollAnimation  animateIn="fadeIn">
            <header>
            <div className="container header_container">
                <h5>
                    Hello I'm
                </h5>
                <h1>Rishabh Gupta</h1>
                <h5 className="text-light">
                    Software Engineering Student
                </h5>
                <CTA />
                <HeaderSocials />

                <div className='me'>
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className='scroll_down'>Scroll Down</a>

            </div>
        </header>
        </ScrollAnimation>
        
    );
}

export default Header
