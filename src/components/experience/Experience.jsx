import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const experience = () => {
  return (
    <section id="experience">
      <h5>skills</h5>
      <h2>Experience</h2>
      <div className="experience d-flex justify-content-center">
        <div className="experience__frontend">
          <h3 className="mb-5">Frontend Development</h3>
          <div className="experience__content">
            <article className="experience-details">
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience-details">
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience-details">
              <BsPatchCheckFill />
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience-details">
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
              <small className="text-light">Mid-level</small>
            </article>

            <article className="experience-details">
              <BsPatchCheckFill />
              <h4>JQyery</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience-details">
              <BsPatchCheckFill />
              <h4>React JS</h4>
              <small className="text-light">Mid-level</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
