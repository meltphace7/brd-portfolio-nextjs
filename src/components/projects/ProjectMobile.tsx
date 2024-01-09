import React, {useState, useEffect } from 'react';
import Image from 'next/image';
import classes from './ProjectMobile.module.css';
import { useInView } from "react-intersection-observer";

interface ProjectMobileProps {
  title: string;
  description: string;
  stack: string[];
  image: any;
  link: string;
}

const ProjectMobile: React.FC<ProjectMobileProps> = (props) => {
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
      >
        {" "}
      </a>
      <div className={classes["project-header"]}>
        <h3>Featured Project</h3>
        <a
          className={classes["project-title"]}
          href={props.link}
          target="_blank"
          rel="noreferrer"
        >
          {props.title}
        </a>
      </div>
      <Image
        className={classes["project-img"]}
        src={props.image}
        alt={props.title}
        unoptimized
      />
      <div className={classes["project-text"]}>
        <div className={classes["project-description"]}>
          <p>{props.description}</p>
        </div>
        <ul className={classes["project-technologies"]}>
          {props.stack.map((text: string, index: number) => {
            return <li key={index}>{text}</li>;
          })}
        </ul>
      </div>
    </section>
  );
}

export default ProjectMobile;
