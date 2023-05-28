import React from "react";
import Articles from "./Articles";
import { articleData } from "./articleData";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience d-flex justify-content-center">
        <div className="experience__frontend">
          <h3 className="mb-5">Frontend Development</h3>
          <div className="experience__content">
            {articleData.map((article, index) => (
              <Articles key={index} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
