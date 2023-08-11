import React from 'react'
import './skills.css'
import {BsPatchCheckFill} from "react-icons/bs";
import ScrollAnimation from 'react-animate-on-scroll';

const Skills = () => {
    return (
        <section id="skills">
            <h5>I have worked on these</h5>
            <h2>Skills</h2>
            <div className="container experience_container">
                <ScrollAnimation animateIn='fade-right'>
                <div className="experience_frontend">
                    <h3>Web Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_detail-icon'/>
                            <h4>HTML</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_detail-icon'/>
                            <h4>CSS</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_detail-icon'/>
                            <h4>JavaScript</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_detail-icon'/>
                            <h4>BootStrap</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_detail-icon'/>
                            <h4>Tailwind</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_detail-icon'/>
                            <h4>React.js</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_detail-icon'/>
                            <h4>MySql</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_detail-icon'/>
                            <h4>FireBase</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_detail-icon'/>
                            <h4>Node.js</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_detail-icon'/>
                            <h4>JAVA</h4>
                        </article>
                    </div>
                </div>
                </ScrollAnimation>
                
                <ScrollAnimation animateIn='fade-left'>
                <div className="experience_backend">
                    <h3>Devops</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_detail-icon'/>
                            <h4>Docker</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_detail-icon'/>
                            <h4>Azure devops</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_detail-icon'/>
                            <h4>CI CD</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_detail-icon'/>
                            <h4>Jenkins</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_detail-icon'/>
                            <h4>Kubernetes</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_detail-icon'/>
                            <h4>Netsparker</h4>
                        </article>
                    </div>

                </div>
                </ScrollAnimation>
                
            </div>
        </section>
    );
}

export default Skills