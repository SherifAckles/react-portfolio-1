/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer-logo">
        Ackles
      </a>
      <ul className="footer-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer-social">
        <a href="https://facebook.com">
          <AiFillFacebook />
        </a>
        <a href="https://instagram.com">
          <AiFillInstagram />
        </a>
        <a href="https://twitter.com">
          <AiFillTwitterSquare />
        </a>
      </div>
      <div className="footer-copyright">
        <small>&copy;Sherif Ackles</small>
      </div>
    </footer>
  );
};

export default Footer;
