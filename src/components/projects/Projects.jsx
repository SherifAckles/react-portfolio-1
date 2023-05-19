/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./projects.css";
import Crm from "../../assets/crm.jpg";
import tours from "../../assets/tours.png";
import Guess from "../../assets/guess.png";
import Chatly from "../../assets/chatly-project.png";
import Drum from "../../assets/drum.png";
import Pig from "../../assets/pig.png";
import Fizz from "../../assets/fizz buzz.png";
import Dragon from "../../assets/dragon-fire-game.png";

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
            </a>{" "}
            {/*image projects link */}
          </div>
        </article>

        {/* SIMON GAME PROJECT */}
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

        {/* GUESS THE NUMBER GAME PROJECT  */}
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
            </a>{" "}
            {/*image projects link */}
          </div>
        </article>

        {/* DRUM KIT PROJECT */}
        <article className="project-item">
          <div className="project-img">
            <img src={Drum} />
          </div>
          <h3>Drum Kit</h3>
          <div className="project-item-cta">
            <a
              href="https://github.com/nabesteron/Drum-Kit"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://drum-kit-sherif.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>{" "}
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
            </a>{" "}
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
            </a>{" "}
            {/*image projects link */}
          </div>
        </article>

        {/* DRAGON FIRE GAME PROJECT */}
        <article className="project-item">
          <div className="project-img">
            <img src={Dragon} />
          </div>
          <h3>Dragon fire game</h3>
          <div className="project-item-cta">
            <a
              href="https://github.com/nabesteron/dragon-fire"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://dragon-fire-sherif-moustafa.netlify.app/"
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
