import React from "react";
import classes from "./Footer.module.css";
import Image from "next/image";
import LogoWhite from "../../public/assets/imgs/BD-LOGO-WHITE.svg";
import LogoBlack from "../../public/assets/imgs/BD-LOGO-BLACK.svg";
import { useTheme } from "../store/theme-context";
import { Link } from "react-scroll";

const Footer: React.FC = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const { darkModeOn } = useTheme();
  
  const Logo = darkModeOn ? LogoWhite : LogoBlack;
  
  const footerClasses = darkModeOn
    ? `${classes.footer} ${classes["footer-dark"]}`
    : `${classes.footer} ${classes["footer-light"]}`;

  return (
    <footer className={footerClasses}>
      <Link
        className={classes["logo-container"]}
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        aria-label="To Home Section"
        href="/"
      >
        <Image src={Logo} alt="Brock Dallman logo" />
        <p>{`Brock Dallman ${currentYear}`}</p>
      </Link>
    </footer>
  );
};

export default Footer;
