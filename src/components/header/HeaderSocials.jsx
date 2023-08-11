import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {SiLeetcode} from "react-icons/si";

const HeaderSocials=()=>{
    return (
        <div className='header_socials'>
            <a href="https://www.linkedin.com/in/rishabh-gupta-432a98195/" target='_blank'><BsLinkedin /></a>
            <a href="https://leetcode.com/guptarishabh1122/" target='_blank'><SiLeetcode /></a>
            <a href="https://github.com/rishgupta2301" target='_blank'><BsGithub /></a>
        </div>
    );
}

export default HeaderSocials;