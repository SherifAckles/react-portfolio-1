/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./About.css";
import Me from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
const about = () => {
  return (
    <section id="about">
      <h2>My story</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                2+ years of self taught experience, creating and developing
                projects
              </small>
            </article>

            <article className="about__card">
              <FaUniversity className="about__icon" />
              <h5>University</h5>
              <small>
                1 year learning basic programming languages at the Alexandria
                university
              </small>
            </article>
          </div>
          <p>
            An Egyptian archeologist converting his career, relocated to another
            country, and rather than excavating monuments sites, he loves
            excavating code.
          </p>

          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
