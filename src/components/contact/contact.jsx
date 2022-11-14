import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

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
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>+57 313 843 0910</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+573138430910"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form action="">
          <input type="text" name = "name" placeholder="Your full name" required/>
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message"  rows="7"placeholder="Your message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default contact;
