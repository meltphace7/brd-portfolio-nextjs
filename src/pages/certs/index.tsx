import classes from "@/styles/Certs.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { Fragment } from "react";
import javascriptCert from "../../../public/assets/certs/javascript-cert.jpeg";
import reactCert from "../../../public/assets/certs/react-cert.jpeg";
import typescriptCert from "../../../public/assets/certs/typescript-cert.jpeg";
import htmlCert from "../../../public/assets/certs/html-css-sass-cert.jpeg";
import nodeCert from "../../../public/assets/certs/node-cert.jpeg";
import nextCert from "../../../public/assets/certs/NEXTJS-CERT.jpeg";

const Certs: React.FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Certifications | Brock Dallman Web Developer Official Site</title>
        <meta
          name="description"
          content="Brock Dallman's web development certifications"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.certs}>
        <div className={classes["certs-container"]}></div>
        <h1>Certifications</h1>
        <Image
          className={classes.cert}
          src={reactCert}
          alt="React certification"
        />
        <Image
          className={classes.cert}
          src={javascriptCert}
          alt="Javascript certification"
        />
        <Image
          className={classes.cert}
          src={typescriptCert}
          alt="Typescript certification"
        />
        <Image
          className={classes.cert}
          src={htmlCert}
          alt="HTML certification"
        />
        <Image
          className={classes.cert}
          src={nodeCert}
          alt="NodeJS certification"
        />
        <Image
          className={classes.cert}
          src={nextCert}
          alt="NextJs certification"
        />
        <Link className={classes.link} href="/" aria-label="Back to Home Page">
          Return to Main Page
        </Link>
      </div>
    </Fragment>
  );
};

export default Certs;
