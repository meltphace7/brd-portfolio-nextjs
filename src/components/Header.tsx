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
    if (offsetY > 300) {
      setAboutCrossed(true);
    }

    if (aboutCrossed && offsetY < 300) {
      setAboutCrossed(false);
    }
  }, [offsetY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [aboutCrossed]);

  const titleClasses = aboutCrossed
    ? `${classes["title-container"]} ${classes["fade-out"]}`
    : classes["title-container"];

  return (
    <React.Fragment>
      <div id="home"></div>
      <header
        className={classes.header}
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <div className={classes["hero__text"]}>
          <h1>BROCK DALLMAN</h1>
          <h2>Web Developer</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            illum minus ad optio numquam?
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
      </header>
    </React.Fragment>
  );
};

export default Header;
