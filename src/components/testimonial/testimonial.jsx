import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./testimonial.css"
import Carl from "../../assets/carl.png";
import Jane from "../../assets/janetest.png";
import KellyM from "../../assets/KellyM.png";

function Testimonial() {
  return (
    <section id="testemonial">
      <Carousel>
        <Carousel.Item>
          <p className="testemonials">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
          <img className="avatar" src={Carl} alt="First slide" />
          <p className="from-where">
            <em>Jacky Milano, New York</em>
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <p className="testemonials">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <img className="avatar" src={Jane} alt="Second slide" />
          <p className="from-where">
            <em>Jacky Milano, New York</em>
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <p className="testemonials">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <img className="avatar" src={KellyM} alt="Third slide" />
          <p className="from-where">
            <em>Jacky Milano, New York</em>
          </p>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
export default Testimonial;
