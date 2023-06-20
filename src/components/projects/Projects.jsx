import React, { useState } from "react";
import "./projects.css";
import ProjectArray from "./projectArray";

const Projects = () => {
  const [projects, setProjects] = useState(ProjectArray);

  return (
    <section id="projects">
      <h2>My recent projects</h2>
      <div className="project-container">
        {projects.map(({ name, image, github, demo }) => (
          <article className="project-item" key={name}>
            <div className="project-img">
              <img src={image} alt={name} />
            </div>
            <h3>{name}</h3>
            <div className="project-item-cta">
              <a href={github} className="btn" target="_blank" rel="noreferrer">
                Github
              </a>
              <a
                href={demo}
                className={`btn btn-primary ${!demo && "disabled"}`}
                target="_blank"
                rel="noreferrer"
              >
                {demo ? "Live Demo" : "Coming soon"}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
