/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./projects.css";
import Crm from "../../assets/crm.jpg";
import Simon from "../../assets/simon.png";
import Guess from "../../assets/guess.png";
import Chatly from "../../assets/chatly-project.png";
const Projects = () => {
  return (
    <section id="projects">
      <h2>My recent projects</h2>
      <div className="project-container">
        <article className="project-item">
          <div className="project-img">
            <img src={Crm} />
          </div>
          <h3>CRM TOOL</h3>
          <div className="project-item-cta">
            <a
              href="https://github.com/MA5TERMIND2020/CRM-Tool"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="http://github.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>{" "}
            {/*image projects link */}
          </div>
        </article>

        <article className="project-item">
          <div className="project-img">
            <img src={Simon} />
          </div>
          <h3>simon game</h3>
          <div className="project-item-cta">
            <a
              href="https://github.com/nabesteron/Simon-game"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://simon-game-sherif-moustafa.netlify.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>{" "}
            {/*image projects link */}
          </div>
        </article>

        <article className="project-item">
          <div className="project-img">
            <img src={Guess} />
          </div>
          <h3>Guess the number game</h3>
          <div className="project-item-cta">
            <a
              href="https://github.com/nabesteron/Guess-the-number-game"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://guess-the-number-game-sherif-moustafa.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>{" "}
            {/*image projects link */}
          </div>
        </article>

        <article className="project-item">
          <div className="project-img">
            <img src={Chatly} />
          </div>
          <h3>Chatly 101</h3>
          <div className="project-item-cta">
            <a
              href="https://github.com/nabesteron/chatly"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://chatly101.netlify.app/login"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>{" "}
            {/*image projects link */}
          </div>
        </article>

        <article className="project-item">
          <div className="project-img">
            <img src={Crm} />
          </div>
          <h3>CRM TOOL</h3>
          <div className="project-item-cta">
            <a
              href="https://github.com/MA5TERMIND2020/CRM-Tool"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="http://github.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>{" "}
            {/*image projects link */}
          </div>
        </article>

        <article className="project-item">
          <div className="project-img">
            <img src={Crm} />
          </div>
          <h3>CRM TOOL</h3>
          <div className="project-item-cta">
            <a
              href="https://github.com/MA5TERMIND2020/CRM-Tool"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="http://github.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>{" "}
            {/*image projects link */}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
