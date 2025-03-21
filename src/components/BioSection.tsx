import React from "react";
import classes from "./BioSection.module.css";
import Image from 'next/image';
import BioPic from "../../public/assets/imgs/WA_BROCK_SUMMIT_POSE.jpg";
import { useTheme } from "../store/theme-context";

const BioSection: React.FC = () => {
  const { darkModeOn } = useTheme();
  const bioClasses = darkModeOn
    ? `${classes["bio-container"]} ${classes["bio-container-dark"]}`
    : `${classes["bio-container"]} ${classes["bio-container-light"]}`;
  
  const sectionTitleClasses = darkModeOn
    ? `section-title section-title--dark`
    : `section-title section-title--light`;
  
  
  return (
    <section id="about" className={classes["bio-section"]}>
      <h1 className={sectionTitleClasses}>About Me</h1>
      <div className={bioClasses}>
        <div className={classes["bio-text"]}>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As a&nbsp;
            <a
              href="https://brockdallmanphotography.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to brockdallmanphotography.com"
            >
              landscape photographer
            </a>
            &nbsp;and&nbsp;
            <a
              href="https://brockdallmanart.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to brockdallmanart.com"
            >
              illustrator
            </a>
            , I wanted to learn how to make my own websites to display my work
            in a way that would give me absolute control over the design and
            user experience. I quickly became enthralled in the process and
            began to pursue web development as a career path.
          </p>
          <p>
            I started taking online courses to expand my knowledge and skill set.
            Since learning Javascript, NodeJS, MongoDB, Express, React, NextJS and Wordpress theme development, I have been designing and coding a variety of projects,
            always prioritizing a responsive and user friendly design.
          </p>
          <p>
            I look forward to collaborating with you to create awesome,
            responsive and intuitive websites and applications that deliver a
            great user experience!
          </p>
        </div>
        <div className={classes["bio-img__container"]}>
          <Image src={BioPic} alt="Brock Dallman" priority />
        </div>
      </div>
    </section>
  );
};

export default BioSection;
