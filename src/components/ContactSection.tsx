import React, { useState, useEffect } from "react";
import { useForm } from "@formspree/react";
import classes from "./ContactSection.module.css";
import ModalMessage from "./notifications/ModalMessage";
import { useTheme } from "../store/theme-context";

const ContactSection: React.FC = () => {
   const { darkModeOn } = useTheme();
  const [state, handleSubmit] = useForm("meqweoep");
  const [modalIsShown, setModalIsShown] = useState(false);
  const [message, setMessage] = useState("");

     const sectionTitleClasses = darkModeOn
       ? `section-title section-title--dark`
       : `section-title section-title--light`;

  const emailClasses = darkModeOn
    ? `${classes["email-dark"]}`
    : `${classes["email-light"]}`;
  
  const formClasses = darkModeOn
    ? `${classes.form} ${classes.dark}`
    : `${classes.form} ${classes.light}`;
  
   const formMessageClasses = darkModeOn
     ? `${classes["form__message"]} ${classes.dark}`
     : `${classes["form__message"]} ${classes.light}`;
  
    const emailInputClasses = darkModeOn
      ? `${classes["form__input--email"]} ${classes.dark}`
      : `${classes["form__input--email"]} ${classes.light}`;
  
    const nameInputClasses = darkModeOn
      ? `${classes["form__input--first-name"]} ${classes.dark}`
      : `${classes["form__input--first-name"]} ${classes.light}`;
  
      const subjectInputClasses = darkModeOn
        ? `${classes["form__input--subject"]} ${classes.dark}`
        : `${classes["form__input--subject"]} ${classes.light}`;

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
      <h1 className={sectionTitleClasses}>Contact</h1>

      <h2 className={emailClasses}>brock.dallman@gmail.com</h2>

      <form
        onSubmit={handleSubmit}
        className={formClasses}
        id="contact-form"
        aria-label="Contact form"
      >
        <div className={classes.form__row}>
          <div className={classes.form__group__top}>
            <label htmlFor="name">Your Name</label>
            <input
              className={nameInputClasses}
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className={classes.form__group__top}>
            <label htmlFor="email">Your Email</label>
            <input
              className={emailInputClasses}
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
            className={subjectInputClasses}
            type="text"
            id="subject"
            name="subject"
            required
          />
        </div>
        <div className={classes.form__group}>
          <label htmlFor="message">Message</label>
          <textarea
            className={formMessageClasses}
            name="message"
            id="message"
            required
          />
        </div>
        <button
          className={classes['form-submit-btn']}
          type="submit"
          disabled={state.submitting}
          aria-label="Submit Form Button"
        >
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
