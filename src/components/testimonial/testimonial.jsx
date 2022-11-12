import React from "react";
import "./testimonial.css";
import Calvin from "../../assets/calvin.png";
import Jacktest from "../../assets/jacktest.png";
import Jane from "../../assets/janetest.png";
import Wanda from "../../assets/wanda.png";
const testimonial = () => {
  return (
    <section id="testimonial">
     <div>
            <img src={Calvin} className="calvin" alt="calvin" />
         </div>
    </section>
  );
};

export default testimonial;
