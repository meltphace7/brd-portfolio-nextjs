import React, {useState, useEffect } from "react";
import Image from "next/image";
import classes from "./Project.module.css";
import { useInView } from "react-intersection-observer";

interface ProjectsProps {
  title: string;
  description: string;
  stack: string[];
  image: any;
  link: string;
}

const Project: React.FC<ProjectsProps> = (props) => {
  const [projectRevealed, setProjectRevealed] = useState(false);

  // Intersection Observer pop-up / fade animation
  const options = { root: null, threshold: 0.2 };

  const { ref: projectRef, inView: projectIsVisible } =
    useInView(options);

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
      <div className={classes["project-img_container"]}>
        <Image
          className={classes["project-img"]}
          src={props.image}
          alt={`Screen shot of Brock Dallman's ${props.title} website`}
          unoptimized
        />
      </div>
      <div className={classes["project-text"]}>
        <div className={`${classes["project-header"]} ${classes["tt-header"]}`}>
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
        <div className={classes["project-description"]}>
          <p>{props.description}</p>
        </div>
        <ul className={classes["project-technologies"]}>
          {props.stack.map((s: string, i: number) => {
            return <li key={i}>{s}</li>;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Project;
