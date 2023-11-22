import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Image from 'next/image';
import classes from "./Navigation.module.css";
import logo from "../../public/assets/imgs/BDLOGO-white.png";
import useScrollDirection from "../hooks/use-scroll-direction";

const Navigation: React.FC = () => {
  const scrollDirection = useScrollDirection();

  const [offsetY, setOffsetY] = useState(0);
  const [aboutCrossed, setAboutCrossed] = useState(false);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses =
    scrollDirection === "up" && offsetY > 50
      ? `${classes.nav} ${classes["sticky-nav"]}`
      : classes.nav;

  return (
    <nav className={navClasses}>
      <div className={classes["logo-container"]}>
        <Image src={logo} alt="Brock Dallman Logo" />
      </div>
      <ul className={classes["nav-menu"]}>
        <li>
          <Link
            className={classes["nav-link"]}
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Home
          </Link>
        </li>{" "}
        <li>
          <Link
            className={classes["nav-link"]}
            to="about"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            About
          </Link>
        </li>{" "}
        <li>
          <Link
            className={classes["nav-link"]}
            to="expertise"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Expertise
          </Link>
        </li>
        <li>
          <Link
            className={classes["nav-link"]}
            to="projects"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className={classes["nav-link"]}
            to="contact"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
