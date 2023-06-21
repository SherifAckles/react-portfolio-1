import { useState, useEffect, useRef } from "react";
import { useSpring } from "react-spring";

const useSpringAnimation = () => {
  const [scrollVisible, setScrollVisible] = useState(false);
  const reviewsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (reviewsRef.current) {
        const { top } = reviewsRef.current.getBoundingClientRect();
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

  const springProps = useSpring({
    opacity: scrollVisible ? 1 : 0,
    transform: `translateY(${scrollVisible ? "0%" : "20%"})`,
  });

  return { springProps, reviewsRef };
};

export default useSpringAnimation;
