import React from "react";
import Link from 'next/link';
import classes from "./Skills.module.css";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import Icon from "../../public/assets/imgs/mongoose.js";

const Skills: React.FC = () => {
  return (
    <section id="expertise" className={classes["skills-section"]}>
      <h1 className="section-title">Expertise</h1>
      <div className={classes["skills-container"]}>
        <div className={classes["skills-overview"]}>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Driven by a passion
            for both design and code, I take great enjoyment in crafting
            beautiful and fully responsive websites and applications. Taking
            inspiration from all over the web, I love crafting bold, clean,
            engaging and immersive websites that look great on any device. For
            many of my projects I have designed custom icons and logos utilizing
            Inkscape as well as Adobe Illustrator.
          </p>

          <p>
            I specialize in the React frontend framework, the MERN
            stack(MongoDB, Express, React, NodeJS) and NextJS. NextJS, which
            builds and expands upon the core features of React, has become my
            framework of choice. It&apos;s core features like server side
            rendering, file based routing, built in API and improved SEO, result
            in an improved experience for both the client and the developer. I
            have experience migrating several React projects to the NextJS
            framework.
          </p>

          <p>
            Aside from my frontend skills I also have experience creating NodeJs
            REST APIs with the Express framework. With my REST API acting as an
            intermediary between the frontend and a MongoDB database, I have
            implemented features for my websites such as user
            signup/login/authentication, admin dashboards/privileges, photo/file
            uploads, CRUD(Create, Remove, Update, Delete) operations and more. I
            utilize NPM packages like JSON Web Tokens and BCrypt to ensure
            security and follow best practices. I have also implemented these
            features with NextJS&apos;s built in API which uses NodeJS under the
            hood.
          </p>

          <p>
            As a web developer I thouroughly enjoy solving problems, learning
            perpetually and staying abreast of the lastest trends and
            technologies in the industry. I would love the oppurtunity to
            leverage my expertise and provide innovative solutions to your
            unique business challenges!
          </p>
          <p>
            Click on the following link for my{" "}
            <Link
              className={classes.link}
              href="/certs"
              aria-label="See Brock Dallman's Web Development Certifications"
            >
              certifications
            </Link>{" "}
            and you can find my project repos on my{" "}
            <a
              className={classes.link}
              href="https://github.com/meltphace7"
              target="_blank"
              aria-label="Link to https://github.com/meltphace7"
            >
              Github page
            </a>
            .
          </p>
        </div>
        <div className={classes["skills-display-container"]}>
          <div className={classes["skills-display-frontend"]}>
            <h2>Frontend</h2>
            <div className={classes["skills-display-frontend-container"]}>
              <div className={classes["skills-col"]}>
                <div className={classes["skill"]}>
                  <SiJavascript className={classes["icon"]} size={20} />
                  <p>Javascript</p>
                </div>
                <div className={classes["skill"]}>
                  <SiTypescript className={classes["icon"]} size={20} />
                  <p>Typescript</p>
                </div>
                <div className={classes["skill"]}>
                  <SiReact className={classes["icon"]} size={20} />
                  <p>React</p>
                </div>
                <div className={classes["skill"]}>
                  <SiRedux className={classes["icon"]} size={20} />
                  <p>Redux</p>
                </div>
              </div>
              <div className={classes["skills-col"]}>
                <div className={classes["skill"]}>
                  <SiHtml5 className={classes["icon"]} size={20} />
                  <p>HTML</p>
                </div>
                <div className={classes["skill"]}>
                  <SiCss3 className={classes["icon"]} size={20} />
                  <p>CSS</p>
                </div>
                <div className={classes["skill"]}>
                  <SiSass className={classes["icon"]} size={20} />
                  <p>SASS</p>
                </div>
                <div className={classes["skill"]}>
                  <SiNextdotjs className={classes["icon"]} size={20} />
                  <p>NextJS</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes["skills-display-backend"]}>
            <h2>Backend</h2>
            <div className={classes["skills-display-backend-container"]}>
              <div className={classes["skills-col"]}>
                <div className={classes["skill"]}>
                  <FaNodeJs className={classes["icon"]} size={20} />
                  <p>NodeJs</p>
                </div>
                <div className={classes["skill"]}>
                  <FaNodeJs className={classes["icon"]} size={20} />
                  <p>Express</p>
                </div>
                <div className={classes["skill"]}>
                  <SiMongodb className={classes["icon"]} size={20} />
                  <p>MongoDB</p>
                </div>
                <div className={classes["skill"]}>
                  <Icon />
                  <p>Mongoose</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
