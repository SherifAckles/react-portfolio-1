import React from "react";
import "./about.css";
import Me from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";

const about = () => {
  return (
    <section id="about">
      <h2>My story</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Freelance React Developer and an online  English teacher</h5>
              <small>
                Developed responsive and user-friendly web applications using
                React, HTML, CSS, and JavaScript for two prominent clients in
                Bogotá.
                <br /> Collaborated closely with clients to understand their
                requirements, provide technical solutions, and deliver
                high-quality projects within agreed timelines.
                <br /> Implemented modern UI/UX designs, ensuring seamless
                navigation and optimal user experience.
                <br /> Leveraged React's component-based architecture to create
                modular and scalable codebases, enhancing code maintainability
                and reusability.
                <br /> Owner and CEO of <a href="http://ingles4all.org" target="_blank" rel="noopener noreferrer">ingles4all English school</a>.
                <br /> Received positive client feedback for the delivered
                projects, with a focus on meeting client objectives and
                exceeding expectations.
                <br /> Demonstrated strong problem-solving skills and attention
                to detail in identifying and fixing bugs and implementing
                enhancements.
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