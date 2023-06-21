import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import "./projects.css";
import ProjectArray from "./projectArray";

const Projects = () => {
  const [projects, setProjects] = useState(ProjectArray);
  const [scrollVisible, setScrollVisible] = useState(false);
  const projectsRef = useRef(null);
  const springProps = useSpring({
    opacity: scrollVisible ? 1 : 0,
    transform: `translateY(${scrollVisible ? "0%" : "20%"})`,
    config: {
      duration: 500, // Increase duration for slower animation
    },
  });

  useEffect(() => {
    const handleScroll = () => {
      if (projectsRef.current) {
        const { top } = projectsRef.current.getBoundingClientRect();
        const isVisible = top < window.innerHeight * 0.8;
        setScrollVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="projects">
      <h2 className="project-heading">My Recent Projects</h2>
      <div className="project-container" ref={projectsRef}>
        {projects.map(({ name, image, github, demo }) => (
          <animated.article
            className="project-item"
            style={springProps}
            key={name}
          >
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
          </animated.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
