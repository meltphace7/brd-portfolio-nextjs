import React, { useState, useEffect } from "react";
import classes from "./Header.module.css";
import Image from "next/image";
import BioPic from "../../public/assets/imgs/BROCK_MTN-PORTRAIT-HQ.jpg";
import { Link } from "react-scroll";

const Header: React.FC = () => {
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

  const heroClasses = aboutCrossed
    ? `${classes["hero__content"]} ${classes["fade-out"]}`
    : classes["hero__content"];

  return (
    <React.Fragment>
      <div id="home"></div>
      <header
        className={classes.header}
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <div className={heroClasses}>
          <div className={classes["hero__text"]}>
            <h1>BROCK DALLMAN</h1>
            <h2>Web Developer</h2>
            <p>
              Hi, I&#39;m Brock! I design and develop beautiful and engaging
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
          <div className={classes["hero__img-container"]}>
            <Image src={BioPic} alt="Brock Dallman" priority />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
