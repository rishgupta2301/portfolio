import React, {useEffect} from 'react'
import './work.css'

const Work = () => {
    useEffect(() => {
        const LoadExternalScript = () => {
            const tabs = document.querySelectorAll('[data-target]'),
                tabContents = document.querySelectorAll('[data-content]')

            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    console.log('click disparado')
                    const target = document.querySelector(tab.dataset.target)

                    tabContents.forEach(tabContent => {
                        tabContent.classList.remove('qualification__active')
                    })
                    target.classList.add('qualification__active')

                    tabs.forEach(tab => {
                        tab.classList.remove('qualification__active')
                    })
                    tab.classList.add('qualification__active')
                })
            })
        };
        LoadExternalScript();
    }, [])
    return (
        <section className="qualification__section" id="qualifications">

            <h5 className="section__subtitle">My personal journey</h5>
            <h2>Qualifications</h2>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button button--flex" data-target='#education'>
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div className="qualification__button button--flex qualification__active" data-target="#work">
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Work
                    </div>
                </div>

                <div className="qualification__sections">

                    <div className="qualification__content" data-content id="education">

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bachelor of Technology - Electronics and Communication
                                    Engin.</h3>
                                <span className="qualification__subtitle">Maharaja Surajmal Institute of Technology, New Delhi</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2019 - 2023
                                </div>
                                <div className="qualification__calendar">GPA : 8.8</div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>

                            </div>

                            <div>
                                <h3 className="qualification__title">12th Standard</h3>
                                <span
                                    className="qualification__subtitle">Himalaya Public Sr. Sec. School, Delhi </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2018 - 2019
                                </div>
                                <div className="qualification__calendar">Percentage : 90%</div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>

                            </div>

                            <div>
                                <h3 className="qualification__title">10th Standard</h3>
                                <span
                                    className="qualification__subtitle">St. Dominics Sr. Sec. School, Mathura </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2016 - 2017
                                </div>
                                <div className="qualification__calendar">CGPA : 9.6</div>
                            </div>
                        </div>


                    </div>


                    <div className="qualification__content qualification__active" data-content id="work">
                    <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Software Engineering intern</h3>
                                <span className="qualification__subtitle">Adani Digital Labs</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    Jan 2023- Present
                                </div>
                            </div>
                        </div>
                        
                        

                        {/* <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Software Engineering intern- Frontend</h3>
                                <span className="qualification__subtitle">Young India Foundation</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    Aug 2021- Oct 2021
                                </div>
                            </div>
                        </div> */}
                        
                        {/* <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Student Intern</h3>
                                <span className="qualification__subtitle">GreenYatra</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    Feb 2021 - March 2021
                                </div>
                            </div>
                        </div> */}

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Work;