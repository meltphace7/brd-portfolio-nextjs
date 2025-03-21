import { useTheme } from "../store/theme-context";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import classes from "./Navigation.module.css";
import LogoWhite from "../../public/assets/imgs/BD-LOGO-WHITE.svg";
import LogoBlack from "../../public/assets/imgs/BD-LOGO-BLACK.svg";
import useScrollDirection from "../hooks/use-scroll-direction";

import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";

const Navigation: React.FC = () => {
  const { darkModeOn, toggleDarkMode } = useTheme();

  const themeSwitchClasses = darkModeOn
    ? `${classes["theme-toggle-btn__circle"]} ${classes["toggle-theme-off"]}`
    : `${classes["theme-toggle-btn__circle"]} ${classes["toggle-theme-on"]}`;

  const scrollDirection = useScrollDirection();

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navThemeClasses = darkModeOn
    ? `${classes.nav} ${classes["nav-dark"]}`
    : `${classes.nav} ${classes["nav-light"]}`;

  const stickyNavClasses = darkModeOn
    ? `${classes["sticky-nav"]} ${classes["sticky-nav-dark"]}`
    : `${classes["sticky-nav"]} ${classes["sticky-nav-light"]}`;
  
    const contactLinkClasses = darkModeOn
      ? `${classes["contact-link"]} ${classes["contact-link-dark"]}`
      : `${classes["contact-link"]} ${classes["contact-link-light"]}`;

  const headerNavClasses =
    scrollDirection === "up" && offsetY > 50
      ? `${classes.header} ${stickyNavClasses}`
      : `${classes.header}`;

  const Logo = darkModeOn ? LogoWhite : LogoBlack;



  return (
    <header className={headerNavClasses}>
      <nav className={navThemeClasses}>
        <div className={classes["logo-container"]}>
          <Link
            className={classes["nav-link"]}
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            aria-label="To Home Section"
          >
            <Image src={Logo} alt="Brock Dallman Logo" />
          </Link>
        </div>
        <ul className={classes["nav-menu"]}>
          <li>
            <button
              className={classes["theme-toggle-btn"]}
              onClick={toggleDarkMode}
            >
              <IoSunny className={classes["toggle-sun"]} size={15} />
              <IoMoon className={classes["toggle-moon"]} size={15} />
              <div className={themeSwitchClasses}></div>
            </button>
          </li>
          <li>
            <Link
              className={classes["nav-link"]}
              to="about"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              aria-label="To About Section"
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
              aria-label="To Expertise Section"
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
              aria-label="To Projects Section"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={contactLinkClasses}
              to="contact"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              aria-label="To Contact Section"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
