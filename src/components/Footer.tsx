import React from "react";
import classes from "./Footer.module.css";
import Image from 'next/image'
import logo from "../assets/images/BDLOGO-white.png";

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["logo-container"]}>
        <Image src={logo} alt="Brock Dallman logo" />
        <p>Brock Dallman 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
