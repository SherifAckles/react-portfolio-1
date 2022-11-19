import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";



const experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience d-flex justify-content-center">
        <div className="experience__frontend">
          <h3 className="mb-5">Frontend Development</h3>
          <div className="experience__content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <h4>HTML</h4>
            </article>

            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <h4>CSS</h4>
            </article>

            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon " />
              <h4>Bootstrap</h4>
            </article>

            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon " />
              <h4>JavaScript</h4>
            </article>

            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon " />
              <h4>JQuery</h4>
            </article>

            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon " />
              <h4>React JS</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
