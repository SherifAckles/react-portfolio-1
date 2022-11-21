import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./testimonial.css";
import Carl from "../../assets/carl.png";
import Jane from "../../assets/janetest.png";
import KellyM from "../../assets/KellyM.png";

function Testimonial() {
  return (
    <div id="testimonials">
      <h2 className="test-h2">Testimonials</h2>
      <section id="testimonial">
        <Carousel>
          <Carousel.Item>
            <p className="testimonials">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
            <img className="avatar" src={Carl} alt="First slide" />
            <p className="from-where">
              <em>Jacky Milano, New York</em>
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <p className="testimonials">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <img className="avatar" src={Jane} alt="Second slide" />
            <p className="from-where">
              <em>Jacky Milano, New York</em>
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <p className="testimonials">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <img className="avatar" src={KellyM} alt="Third slide" />
            <p className="from-where">
              <em>Jacky Milano, New York</em>
            </p>
          </Carousel.Item>
        </Carousel>
      </section>
    </div>
  );
}
export default Testimonial;
