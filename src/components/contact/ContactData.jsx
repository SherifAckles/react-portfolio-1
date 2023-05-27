import React from "react";
import "./contact.css";
import useEmailSender from "./useEmailSender";
import { contactOptions } from "./contactOptions";

const ContactData = () => {
  const { form, sendEmail } = useEmailSender();

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact-options">
          {contactOptions.map(({ icon, title, value, link }, index) => (
            <article className="contact-option" key={index}>
              {icon}
              <h4>{title}</h4>
              <h5>{value}</h5>
              <a href={link} target="_blank" rel="noreferrer">
                Send a message
              </a>
            </article>
          ))}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Name" required />
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

export default ContactData;
