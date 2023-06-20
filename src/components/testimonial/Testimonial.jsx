import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
import "./testimonial.css";

function Reviews() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
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
    <section className="section" id="Reviews">
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
            <main className={position} key={id}>
              <img src={image} alt={from} className="person-img" />
              <h4>{from}</h4>

              <p className="text">{testimonial}</p>
              <FaQuoteRight className="icon" />
            </main>
          );
        })}
        <button onClick={() => setIndex(index - 1)} className="prev">
          <FiChevronLeft />
        </button>
        <button onClick={() => setIndex(index + 1)} className="next">
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Reviews;
