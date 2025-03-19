import React, {useState, useEffect } from 'react'
import classes from './Project.module.css'
import Image from 'next/image';
import { useInView } from "react-intersection-observer";
import LinkIconAlt from "../../../public/assets/imgs/link-icon-alt.svg";

interface ProjectsProps {
  title: string;
  description: string;
  stack: string[];
  image: any;
  link: string;
}

const ProjectAlt: React.FC<ProjectsProps> = (props) => {
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
        <div
          className={`${classes["project-header-alt"]} ${classes["bdp-header"]}`}
        >
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
        <div className={classes["project-description-alt"]}>
          <p>{props.description}</p>
          <ul className={classes["project-technologies"]}>
            {props.stack.map((s: string, i: number) => {
              return <li key={i}>{s}</li>;
            })}
          </ul>
        </div>
        <a
          className={classes["project-link-btn"]}
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
              src={LinkIconAlt}
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
      <div className={classes["project-img_container"]}>
        <Image
          className={classes["project-img"]}
          src={props.image}
          alt={`Screen shot of Brock Dallman's ${props.title} website`}
        />
      </div>
    </section>
  );
}

export default ProjectAlt
