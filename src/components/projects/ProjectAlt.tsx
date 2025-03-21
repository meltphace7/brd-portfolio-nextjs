import React, { useState, useEffect } from "react";
import classes from "./Project.module.css";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import LinkIcon from "../../../public/assets/imgs/link-icon-black-alt.svg";
import LinkIconWhite from "../../../public/assets/imgs/link-icon-white-alt.svg";
import { useTheme } from "../../store/theme-context";

interface ProjectsProps {
  title: string;
  description: string;
  stack: string[];
  image: any;
  link: string;
}

const ProjectAlt: React.FC<ProjectsProps> = (props) => {
  const { darkModeOn } = useTheme();

  const projDescClasses = darkModeOn
    ? `${classes["project-description-alt"]} ${classes["project-description-dark"]}`
    : `${classes["project-description-alt"]} ${classes["project-description-light"]}`;
  const projHeaderClasses = darkModeOn
    ? `${classes["project-header-alt"]} ${classes["project-header--dark"]}`
    : `${classes["project-header-alt"]} ${classes["project-header--light"]}`;

  const imgContainerClasses = darkModeOn
    ? `${classes["project-img_container"]} ${classes["project-img_container--dark"]}`
    : `${classes["project-img_container"]} ${classes["project-img_container--light"]}`;

  const linkBtnClasses = darkModeOn
    ? `${classes["project-link-btn"]} ${classes["project-link-btn--dark"]}`
    : `${classes["project-link-btn"]} ${classes["project-link-btn--light"]}`;
  
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
          : `${classes.project} ${classes["hidden-alt"]}`
      }
    >
      <div className={classes["project-text-alt"]}>
        <div className={`${projHeaderClasses} ${classes["bdp-header"]}`}>
          <h2>Featured Project</h2>
          <h1>
            <a
              className={classes["project-title"]}
              href={props.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Link to ${props.link}`}
            >
              {props.title}
            </a>
          </h1>
        </div>
        <div className={projDescClasses}>
          <p>{props.description}</p>
          <ul className={classes["project-technologies"]}>
            {props.stack.map((s: string, i: number) => {
              return <li key={i}>{s}</li>;
            })}
          </ul>
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
              className={classes["project-img"]}
              src={linkIcon}
              alt={`Link Icon to ${props.title} website`}
              unoptimized
            />
          </span>
        </a>
      </div>
      <a
        className={classes["project-link"]}
        href={props.link}
        target="_blank"
        rel="noreferrer"
        aria-label={`Link to ${props.link}`}
      >
        {" "}
      </a>
      <div className={imgContainerClasses}>
        <Image
          className={classes["project-img"]}
          src={props.image}
          alt={`Screen shot of Brock Dallman's ${props.title} website`}
        />
      </div>
    </section>
  );
};

export default ProjectAlt;
