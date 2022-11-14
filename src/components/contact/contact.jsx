import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
const contact = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container">
        <div className="contact-option">
          <article className="contact-option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>sherif.goma89@gmail.com</h5>
            <a href="mailto:sherif.goma89@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact-option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>sherif.goma89@gmail.com</h5>
            <a href="mailto:sherif.goma89@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact-option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>sherif.goma89@gmail.com</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+573138430910"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form action=""></form>
      </div>
    </section>
  );
};

export default contact;
