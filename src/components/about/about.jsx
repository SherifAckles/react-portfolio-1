import React from "react";
import "./about.css";
import Me from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
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
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ year self taught experience</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ year self taught experience</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ year self taught experience</small>
            </article>
          </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              consequatur minus deserunt hic rem ad quis nesciunt, itaque, alias
              velit magnam maxime aspernatur officiis dolorem similique
              veritatis dolore dicta eius?
            </p>

            <a href="#contact"className="btn btn-primary">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default about;
