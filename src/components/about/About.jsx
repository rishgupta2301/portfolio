import React from "react";
import "./about.css";
import ME from "../../assets/Rishabh_gupta_blob.jpg"
import { FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know </h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me-image">
          <img src={ME} alt="me" />
        </div>
        <div className="about_content">
          {/*<div className="about_cards">*/}
          {/*    <article className='about_card'>*/}
          {/*        <FaAward className='about_icon'/>*/}
          {/*        <h5>Experience</h5>*/}
          {/*        <small>something</small>*/}
          {/*    </article>*/}
          {/*    <article className='about_card'>*/}
          {/*        <FaAward className='about_icon'/>*/}
          {/*        <h5>Experience</h5>*/}
          {/*        <small>something</small>*/}
          {/*    </article>*/}
          {/*</div>*/}
          <p>
            I am currently pursuing my under graduation in Electronics and
            Communication Engineering from Maharaja Surajmal Institute of
            Technology in New Delhi. I'm passionate about crafting immersive
            digital experiences through the harmonious fusion of HTML, CSS, and
            JavaScript. My dedication to user-centric design drives me to create
            intuitive and responsive interfaces that seamlessly bridge
            aesthetics and functionality. With a keen eye for emerging
            trends, I'm committed to continuous learning and innovation, aiming
            to create captivating user journeys that redefine the digital
            landscape. Have worked in a variety of areas that includes creating
            and deploying REST APIs. Have also worked on React.js.
          </p>

          <a className="btn btn-primary" href="#contact">
            {" "}
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
