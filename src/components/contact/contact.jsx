import React, { useRef as UseRef } from 'react';
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import {FiSmartphone} from "react-icons/fi"
import emailjs from "emailjs-com";

const contact = () => {
   const form = UseRef(); // useref with u small won't work so we have to import useref as UseRef
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_llz1c7d', 'template_iws3frs', form.current, 'nEe2vpFMSRKc_xMJi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>sherif.goma89@gmail.com</h5>
            <a href="mailto:sherif.goma89@gmail.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact-option">
            <FiSmartphone className="contact-option-icon" />
            <h4>Phone Number</h4>
            <h5>+57 313 843 0910</h5>
            <a href="mailto:sherif.goma89@gmail.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className="contact-option-icon" />
            <h4>Whatsapp</h4>
            <h5>+57 313 843 0910</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+573138430910"
              target="_blank" rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Message is linked to emailjs, so I'll get it."
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default contact;
