/* eslint-disable jsx-a11y/alt-text */
import { getProjects } from "../../";
import { Crm, tours, Chatly, Pig, Voz, Fizz } from "./Photos";
import "./projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <h2>My recent projects</h2>
      <div className="project-container">
        {/* CRM PROJECT */}
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
            </a>
            {/*image projects link */}
          </div>
        </article>
        {/* TOURS PROJECT */}
        <article className="project-item">
          <div className="project-img">
            <img src={tours} />
          </div>
          <h3>Tours</h3>
          <div className="project-item-cta">
            <a
              href="https://github.com/SherifAckles/tours"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              {/* Live Demo */}
              Coming soon
            </a>{" "}
            {/*image projects link */}
          </div>
        </article>
        {/* CHATLY CHAT APP PROJECT */}
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
              href="https://chatly101.netlify.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
            {/*image projects link */}
          </div>
        </article>
        {/* PIG GAME PROJECT */}
        <article className="project-item">
          <div className="project-img">
            <img src={Pig} />
          </div>
          <h3>Pig game</h3>
          <div className="project-item-cta">
            <a
              href="https://github.com/nabesteron/pig-game"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://pig-game-sherif-moustafa.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
            {/*image projects link */}
          </div>
        </article>
        {/* FIZZ BUZZ APP PROJECT */}
        <article className="project-item">
          <div className="project-img">
            <img src={Fizz} />
          </div>
          <h3>Fizz Buzz app</h3>
          <div className="project-item-cta">
            <a
              href="https://github.com/nabesteron/fizz-buzz-app"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://fizz-buzz-app-sherif.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
            {/*image projects link */}
          </div>
        </article>

        {/* LA VOZ DE BOGOTA */}
        <article className="project-item">
          <div className="project-img">
            <img src={Voz} />
          </div>
          <h3>La voz de Bogota radio</h3>
          <div className="project-item-cta">
            <a
              href="https://github.com/SherifAckles/la-vos-de-bogota-2"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://la-voz-de-bogota.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
            {/*image projects link */}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
