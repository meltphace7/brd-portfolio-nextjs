import React, {useState, useEffect } from 'react';
import Image from 'next/image';
import classes from './ProjectMobile.module.css';
import { useInView } from "react-intersection-observer";
import LinkIcon from "../../../public/assets/imgs/link-icon-black-alt.svg";
import LinkIconWhite from "../../../public/assets/imgs/link-icon-white-alt.svg";
import { useTheme } from "../../store/theme-context";

interface ProjectMobileProps {
  title: string;
  description: string;
  stack: string[];
  image: any;
  link: string;
}

const ProjectMobile: React.FC<ProjectMobileProps> = (props) => {
  const { darkModeOn } = useTheme();

  const projHeaderClasses = darkModeOn
    ? `${classes["project-header"]} ${classes["project-header--dark"]}`
    : `${classes["project-header"]} ${classes["project-header--light"]}`;
  
  const projDescriptionClasses = darkModeOn
    ? `${classes["project-description"]} ${classes["project-description--dark"]}`
    : `${classes["project-description"]} ${classes["project-description--light"]}`;
  
   const linkBtnClasses = darkModeOn
     ? `${classes["project-link-btn"]} ${classes["project-link-btn--dark"]}`
     : `${classes["project-link-btn"]} ${classes["project-link-btn--light"]}`;
  
    const prjImageClasses = darkModeOn
      ? `${classes["project-img"]} ${classes["project-img--dark"]}`
      : `${classes["project-img"]} ${classes["project-img--light"]}`;
  
   const linkIcon = darkModeOn ? LinkIcon : LinkIconWhite;
  




  const [projectRevealed, setProjectRevealed] = useState(false);

  // Intersection Observer pop-up / fade animation
  const options = { root: null, threshold: 0.2 };

  const { ref: projectRef, inView: projectIsVisible } = useInView(options);

  useEffect(() => {
    if (projectIsVisible) {
      setProjectRevealed(true);
    }
  }, [projectIsVisible]);

  return (
    <section
      ref={projectRef}
      className={
        projectRevealed
          ? `${classes.project}`
          : `${classes.project} ${classes["hidden"]}`
      }
    >
      <a
        className={classes["project-link"]}
        href={props.link}
        target="_blank"
        rel="noreferrer"
        aria-label={`Link to ${props.link}`}
      >
        {" "}
      </a>
      <div className={projHeaderClasses}>
        <h2>Featured Project</h2>
        <a
          className={classes["project-title"]}
          href={props.link}
          target="_blank"
          rel="noreferrer"
          aria-label={`Link to ${props.link}`}
        >
          {props.title}
        </a>
      </div>
      <Image
        className={prjImageClasses}
        src={props.image}
        alt={`Screenshot of Brock Dallman's ${props.title} website`}
        unoptimized
      />
      <div className={classes["project-text"]}>
        <div className={projDescriptionClasses}>
          <p>{props.description}</p>
          <ul className={classes["project-technologies"]}>
            {props.stack.map((text: string, index: number) => {
              return <li key={index}>{text}</li>;
            })}
          </ul>
        </div>
      </div>
      <a
        className={linkBtnClasses}
        href={props.link}
        target="_blank"
        rel="noreferrer"
        aria-label={`Link to ${props.link}`}
      >
        {`${props.title}`}
        <span>
          {" "}
          <Image
            // className={classes["project-img"]}
            src={linkIcon}
            alt={`Link Icon to ${props.title} website`}
            unoptimized
          />
        </span>
      </a>
    </section>
  );
}

export default ProjectMobile;
