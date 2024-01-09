import React, { useState, useEffect } from "react";
import { useForm } from "@formspree/react";
import classes from "./ContactSection.module.css";
import ModalMessage from "./notifications/ModalMessage";

const ContactSection: React.FC = () => {
  const [state, handleSubmit] = useForm("meqweoep");
  const [modalIsShown, setModalIsShown] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (state.succeeded) {
      setMessage("Message Sent!");
      setModalIsShown(true);
    }
  }, [state.succeeded]);

  const closeModalHandler = () => {
    setModalIsShown(false);
  };

  return (
    <section id="contact" className={classes["contact-section"]}>
   
        <h1 className="section-title">Contact</h1>

      <h2 className={classes['email']}>brock.dallman@gmail.com</h2>

      <form onSubmit={handleSubmit} className={classes.form} id="contact-form" aria-label="Contact form">
        <div className={classes.form__row}>
          <div className={classes.form__group__top}>
            <label htmlFor="name">Your Name</label>
            <input
              className={classes["form__input--first-name"]}
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className={classes.form__group__top}>
            <label htmlFor="email">Your Email</label>
            <input
              className={classes["form__input--email"]}
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
        </div>

        <div className={classes.form__group}>
          <label htmlFor="subject">Subject</label>
          <input
            className={classes["form__input--subject"]}
            type="text"
            id="subject"
            name="subject"
            required
          />
        </div>
        <div className={classes.form__group}>
          <label htmlFor="message">Message</label>
          <textarea
            className={classes.form__message}
            name="message"
            id="message"
            required
          />
        </div>
        <button type="submit" disabled={state.submitting} aria-label="Submit Form Button">
          Submit
        </button>
      </form>
      {modalIsShown && (
        <ModalMessage onClose={closeModalHandler} message={message} />
      )}
    </section>
  );
};

export default ContactSection;
