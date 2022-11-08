import React from "react";
import "./about.css";
import Me from "../../assets/me.jpg";
const about = () => {
  return (
    <section id="about">
      <h4>Get to know</h4>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <h5></h5>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
