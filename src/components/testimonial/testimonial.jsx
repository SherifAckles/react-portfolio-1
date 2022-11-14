import React from "react";
import Calvin from "../../assets/calvin.png";
import Jacktest from "../../assets/jacktest.png";
import Jane from "../../assets/janetest.png";
// import Wanda from "../../assets/wanda.png";

 import "./testimonial.css";
import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample() {
  return (
    <section id="testimonial">
    <Carousel>
      <Carousel.Item>
        <img className="avatar" src={Calvin} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="avatar" src={Jacktest} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="avatar" src={Jane} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
  );
}

export default UncontrolledExample;
