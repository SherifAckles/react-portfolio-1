import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./testimonial.css";

import { testimonialData } from "./testimonialData";

function Testimonial() {
  return (
    <div id="testimonials">
      <h2 className="test-h2">Testimonials</h2>
      <section id="testimonial">
        <Carousel>
          {testimonialData.map((testimonial) => {
            const {
              id,
              testimonial: testimonialText,
              image,
              from,
            } = testimonial;
            return (
              <Carousel.Item key={id}>
                <p className="testimonials">{testimonialText}</p>
                <img className="avatar" src={image} alt="Slide" />
                <p className="from-where">
                  <em>{from}</em>
                </p>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </section>
    </div>
  );
}

export default Testimonial;
