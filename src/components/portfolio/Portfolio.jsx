import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="projects">
      <h5>My recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <h3>Online Music Player</h3>
          <div className="portfolio_item-image">
            {" "}
            It is an online Music player which fetches music through Shazam API.
            •We can see the lyrics, artist details, and related songs with the
            help of the same API. Tech Stack: HTML, CSS, ReactJS, JavaScript,
            RapidAPI
          </div>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/rishgupta2301/Online-Music-Player"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://lyriks-musicplayer-byrishabh.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <h3>eCommerce Website</h3>
          <div className="portfolio_item-image">
            {" "}
            This is a full stack eCommerce website that includes: - Adding &
            editing products on the go using Sanity - Real payments using
            Stripe. Tech Stack: HTML, CSS, JavaScript, Sanity, Stripe
          </div>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/rishgupta2301/ecommerce_sanity_stripe"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://ecommerce-sanity-stripe-git-main-rishgupta2301.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <h3>Personal Website</h3>
          <div className="portfolio_item-image">
            {" "}
            This is a website to showcase my profile. It is made on React.js and
            hosted with help of netlify and vercel.
          </div>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/harshhx/portfolio"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://www.theharshgupta.co.in/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <h3>StackOverflow Clone</h3>
          <div className="portfolio_item-image">
            {" "}
            It is a fullstack clone of StackOverflow with the functionalities of
            posting questions & answers. Questions and answers can also be voted
            by the users accordingly. Profile of all the registered users can
            also be viewed. Tech Stack: ReactJS, MongoDB, Express, NodeJS
          </div>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/rishgupta2301/stackoverflow-clone"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://stackoverflow-clone-byrishabh.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* <article className="portfolio_item">
          <h3>Work at geeksforgeeks</h3>
          <div className="portfolio_item-image">
            Wrote many articles on Data visualisation and python.
          </div>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn' target="_blank">Github</a>
            <a
              href="https://auth.geeksforgeeks.org/user/hg070401/articles"
              className="btn btn-primary"
              target="_blank"
            >
              Link to articles
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default Portfolio;
