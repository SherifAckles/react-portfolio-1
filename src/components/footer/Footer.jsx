import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Footer = () => {
  const links = [
    { href: "#", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#experience", text: "Experience" },
    { href: "#projects", text: "Projects" },
    { href: "#Reviews", text: "Reviews" },
    { href: "#contact", text: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://facebook.com/Jensen.rose.Ackles",
      icon: <AiFillFacebook />,
    },
    { href: "https://instagram.com", icon: <AiFillInstagram /> },
    { href: "https://twitter.com", icon: <AiFillTwitterSquare /> },
  ];

  return (
    <footer>
      <a href="#footer" className="footer-logo">
        Ackles
      </a>

      <ul className="footer-links">
        {links.map(({ href, text }) => (
          <li key={href}>
            <a href={href}>{text}</a>
          </li>
        ))}
      </ul>

      <div className="footer-social">
        {socialLinks.map(({ href, icon }) => (
          <a key={href} href={href}>
            {icon}
          </a>
        ))}
      </div>

      <div className="footer-copyright">
        <small>&copy;Sherif Ackles</small>
      </div>
    </footer>
  );
};

export default Footer;
