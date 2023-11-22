import React, { useState, useEffect } from "react";
import classes from "./Header.module.css";
import { useInView } from "react-intersection-observer";

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
  }, []);

  ///////////////////
  const [sectionOneRevealed, setSectionOneRevealed] = useState(false);

  // Intersection Observer pop-up / fade animation
  const options = { root: null, threshold: 0.2 };

  const { ref: featureOneRef, inView: featOneIsVisible } = useInView(options);

  useEffect(() => {
    if (featOneIsVisible) {
      setSectionOneRevealed(true);
    }
  }, [featOneIsVisible]);

  //////////////

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
        <div className={classes["header-overlay"]}>
          <div
            style={{ transform: `translateY(${offsetY * 0.1}px)` }}
            className={titleClasses}
          >
            <h1>{`<BROCK DALLMAN />`}</h1>
            <h2>Full Stack Web Developer</h2>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
