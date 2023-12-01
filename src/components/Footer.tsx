import React from "react";
import classes from "./Footer.module.css";
import Image from "next/image";
import logo from "../../public/assets/imgs/BDLOGO-white.png";

const Footer: React.FC = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className={classes.footer}>
      <div className={classes["logo-container"]}>
        <Image src={logo} alt="Brock Dallman logo" />
        <p>{`Brock Dallman ${currentYear}`}</p>
      </div>
    </footer>
  );
};

export default Footer;
