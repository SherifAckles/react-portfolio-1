import React from 'react'
import "./footer.css"
import { AiFillFacebook } from 'react-icons/ai';
import {AiFillInstagram} from "react-icons/ai"
import {AiFillTwitterSquare} from "react-icons/ai"
const Footer = () => {
  return (
      <footer>
<a href="#" className='footer-logo'>Ackles</a>
<ul className='footer-links'>
  <li><a href="#"></a>Home</li>
  <li><a href="#about"></a>About</li>
  <li><a href="#experience"></a>Experience</li>
  <li><a href="#services"></a>Services</li>
  <li><a href="#portfolio"></a>Portfolio</li>
  <li><a href="#testimonial"></a>Testimonial</li>
  <li><a href="#contact"></a>Contact</li>

  <div className="footer-social">
    <a href="https://facebook.com"><AiFillFacebook /></a>
    <a href="https://instagram.com"><AiFillInstagram /></a>
    <a href="https://twitter.com"><AiFillTwitterSquare /></a>
  </div>
  <div className="footer-copyright">
    <small>&copy;Sherif Ackles</small>
  </div>
</ul>




      </footer>
    
  )
}

export default Footer