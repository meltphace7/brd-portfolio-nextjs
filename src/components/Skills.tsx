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
import { FaPhp } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { SiMongoose } from "react-icons/si";
import { useTheme } from "../store/theme-context";
import { SiTailwindcss } from "react-icons/si";

const Skills: React.FC = () => {
  const { darkModeOn } = useTheme();

  const sectionTitleClasses = darkModeOn
    ? `section-title section-title--dark`
    : `section-title section-title--light`;

  const skillsClasses = darkModeOn
    ? `${classes["skills-container"]} ${classes["skills-container-dark"]}`
    : `${classes["skills-container"]} ${classes["skills-container-light"]}`;
  
    const iconClasses = darkModeOn
      ? `${classes["icon--dark"]}`
      : `${classes["icon--light"]}`;
  
  return (
    <section id="expertise" className={classes["skills-section"]}>
      <h1 className={sectionTitleClasses}>Expertise</h1>
      <div className={skillsClasses}>
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
            I specialize in the React and NextJS javascript frameworks as well
            as custom Wordpress theme development. NextJS, which builds and
            expands upon the core features of React, has become my javascript
            framework of choice. It&apos;s core features like server side
            rendering, file based routing, built in API and improved SEO, result
            in an improved experience for both the client and the developer. I
            have experience migrating several React projects to the NextJS
            framework.
          </p>

          <p>
            I also specialize in developing custom WordPress themes, tailored to
            the unique needs of each business. As the world&apos;s most popular
            content management system; powering approximately 43% of all
            websites, WordPress offers flexibility, scalability, and ease of
            use. My custom-built WordPress sites empower administrators to
            manage business data efficiently while maintaining control over key
            aspects of their website.
          </p>

          <p>
            Aside from my frontend skills I also have experience creating NodeJs
            REST APIs with the Express framework. With REST APIs I have
            implemented features for my websites such as user
            signup/login/authentication, inventory management, admin
            dashboards/privileges, photo/file uploads, CRUD(Create, Remove,
            Update, Delete) operations and more. I utilize NPM packages like
            JSON Web Tokens and BCrypt to ensure security and follow best
            practices. I have also implemented these features with NextJS&apos;s
            built in API which uses NodeJS under the hood.
          </p>

          <p>
            As a web developer I thouroughly enjoy solving problems, learning
            perpetually and staying abreast of the lastest trends and
            technologies in the industry. I would love the opportunity to
            leverage my expertise and provide solutions to your unique business
            challenges!
          </p>
          <p>
            Click on the following link for my{" "}
            <Link
              href="/certs"
              aria-label="See Brock Dallman's Web Development Certifications"
            >
              certifications
            </Link>{" "}
            and you can find my project repos on my{" "}
            <a
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
          <h3>TECHNOLOGIES</h3>

          <ul className={classes["skills-grid"]}>
            <li className={classes["skill"]}>
              <SiJavascript className={iconClasses} size={20} />
              <p>Javascript</p>
            </li>
            <li className={classes["skill"]}>
              <SiTypescript className={iconClasses} size={20} />
              <p>Typescript</p>
            </li>
            <li className={classes["skill"]}>
              <SiReact className={iconClasses} size={20} />
              <p>React</p>
            </li>
            <li className={classes["skill"]}>
              <SiNextdotjs className={iconClasses} size={20} />
              <p>NextJS</p>
            </li>

            <li className={classes["skill"]}>
              <SiHtml5 className={iconClasses} size={20} />
              <p>HTML</p>
            </li>
            <li className={classes["skill"]}>
              <SiCss3 className={iconClasses} size={20} />
              <p>CSS</p>
            </li>
            <li className={classes["skill"]}>
              <SiSass className={iconClasses} size={20} />
              <p>SASS</p>
            </li>
            <li className={classes["skill"]}>
              <SiRedux className={iconClasses} size={20} />
              <p>Redux</p>
            </li>
            <li className={classes["skill"]}>
              <FaNodeJs className={iconClasses} size={20} />
              <p>NodeJs</p>
            </li>
            <li className={classes["skill"]}>
              <FaNodeJs className={iconClasses} size={20} />
              <p>Express</p>
            </li>
            <li className={classes["skill"]}>
              <SiMongodb className={iconClasses} size={20} />
              <p>MongoDB</p>
            </li>
            <li className={classes["skill"]}>
              <SiMongoose className={iconClasses} size={20} />
              <p>Mongoose</p>
            </li>
            <li className={classes["skill"]}>
              <FaPhp className={iconClasses} size={20} />
              <p>PHP</p>
            </li>
            <li className={classes["skill"]}>
              <FaWordpress className={iconClasses} size={20} />
              <p>Wordpress</p>
            </li>
            <li className={classes["skill"]}>
              <SiTailwindcss className={iconClasses} size={20} />
              <p>Tailwind</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
