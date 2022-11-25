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
              Not only was Sherif’s work on-time and to spec, he pays attention
              to improve the aesthetics of the site as well as the
              functionality. Throughout the entire process he is responsive, and
              willing to work through issues as they arise. It’s obvious he
              takes tremendous pride in his work, and I wouldn’t hesitate to
              recommend or work with him again.
            </p>
            <img className="avatar" src={Carl} alt="First slide" />
            <p className="from-where">
              <em>Carl Milano, New York</em>
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <p className="testimonials">
              We have the fortune of working with Sherif on a very regular
              basis. Every single project is done in a timely fashion and is
              delivered exactly as is outlined. Beyond that, his development
              skills and expertise make him an invaluable part of our process.
              We absolutely offer our highest possible recommendation. Really
              such a great job.
            </p>
            <img className="avatar" src={Jane} alt="Second slide" />
            <p className="from-where">
              <em>Jane Berger, New York</em>
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <p className="testimonials">
              Working with Sherif was better than expected.He is an incredibly
              talented developer but what really makes him stand out is his work
              ethic and steady approach. Time after time, and without us asking,
              he added enhancements and improvements that resulted in a better
              end product for us and our clients.
              Thank you so much, and looking forward to work with us again.
              
            </p>
            <img className="avatar" src={KellyM} alt="Third slide" />
            <p className="from-where">
              <em>Kelly M Houston, New York</em>
            </p>
          </Carousel.Item>
        </Carousel>
      </section>
    </div>
  );
}
export default Testimonial;
