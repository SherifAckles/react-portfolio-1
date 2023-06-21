import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import Articles from "./Articles";
import { articleData } from "./articleData";
import "./experience.css";

const Experience = () => {
  const [scrollVisible, setScrollVisible] = useState(false);
  const experienceRef = useRef(null);
  const springProps = useSpring({
    opacity: scrollVisible ? 1 : 0,
    transform: `translateY(${scrollVisible ? "0%" : "20%"})`,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (experienceRef.current) {
        const { top } = experienceRef.current.getBoundingClientRect();
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
    <animated.section id="experience" style={springProps} ref={experienceRef}>
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
    </animated.section>
  );
};

export default Experience;
