import React, { useState, useEffect } from "react";
import { useTheme } from '../store/theme-context';
import classes from "./Hero.module.css";
import Image from "next/image";
import BioPic from "../../public/assets/imgs/BROCK_MTN-PORTRAIT-HQ.jpg";
import { Link } from "react-scroll";
  

const Header: React.FC = () => {
 const { darkModeOn } = useTheme();
  // Parallax effect for Header
  const [offsetY, setOffsetY] = useState(0);
  const [aboutCrossed, setAboutCrossed] = useState(false);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
      const checkThreshold = () => {
        const isSmallScreen = window.matchMedia("(max-width: 50em)").matches;
        const threshold = isSmallScreen ? 700 : 300;

        if (offsetY > threshold) {
          setAboutCrossed(true);
        } else if (aboutCrossed && offsetY < threshold) {
          setAboutCrossed(false);
        }
      };

      checkThreshold();
  }, [offsetY, aboutCrossed]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [aboutCrossed]);

  const heroThemeClasses = darkModeOn
    ? `${classes.hero} ${classes["hero-dark"]}`
    : `${classes.hero} ${classes["hero-light"]}`;

  const heroClasses = aboutCrossed
    ? `${classes["hero__content"]} ${classes["fade-out"]}`
    : classes["hero__content"];
  
  const textClasses = darkModeOn
    ? `${classes["hero__text--dark"]} ${classes["hero__text"]}`
    : `${classes["hero__text--light"]} ${classes["hero__text"]}`;
  
    const imgContainerClasses = darkModeOn
      ? `${classes["hero__img-container"]} ${classes["hero__img-container--dark"]}`
      : `${classes["hero__img-container"]} ${classes["hero__img-container--light"]}`;

  return (
    <React.Fragment>
      <div id="home"></div>
      <section
        className={heroThemeClasses}
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <div className={heroClasses}>
          <div className={textClasses}>
            <h1>BROCK DALLMAN</h1>
            <h2>Web Developer</h2>
            <p>
              Hi, I&#39;m Brock! I design and develop
              websites. Let&#39;s bring your vision to life!
            </p>
            <Link
              className={classes["nav-link"]}
              to="contact"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              aria-label="To Contact Section"
            >
              Get In Touch
            </Link>
          </div>
          <div className={imgContainerClasses}>
            <Image src={BioPic} alt="Brock Dallman" priority />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Header;
