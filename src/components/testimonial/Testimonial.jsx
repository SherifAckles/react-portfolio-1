import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import {  animated } from "react-spring";
import data from "./data";
import "./testimonial.css";
import useSpringAnimation from "../../hooks/useSpringAnimation";

function Reviews() {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);
  const { springProps, reviewsRef } = useSpringAnimation();

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  return (
    <animated.section
      className="section"
      id="Reviews"
      style={springProps}
      ref={reviewsRef}
    >
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, testimonial, image, from } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <animated.main className={position} key={id}>
              <img src={image} alt={from} className="person-img" />
              <h4>{from}</h4>
              <p className="text">{testimonial}</p>
              <FaQuoteRight className="icon" />
            </animated.main>
          );
        })}
        <button onClick={() => setIndex(index - 1)} className="prev">
          <FiChevronLeft />
        </button>
        <button onClick={() => setIndex(index + 1)} className="next">
          <FiChevronRight />
        </button>
      </div>
    </animated.section>
  );
}

export default Reviews;
