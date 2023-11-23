import React from 'react'
import classes from './Project.module.css'
import Image from 'next/image';

interface ProjectsProps {
  title: string;
  description: string;
  stack: string[];
  image: any;
  link: string;
}

const ProjectAlt:React.FC<ProjectsProps> = (props) => {
    return (
      <div className={classes["project"]}>
        <div className={classes["project-text-alt"]}>
          <div
            className={`${classes["project-header-alt"]} ${classes["bdp-header"]}`}
          >
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
          <div className={classes["project-description-alt"]}>
            <p>{props.description}</p>
          </div>
          <ul className={classes["project-technologies"]}>
            {props.stack.map((s: string, i: number) => {
              return <li key={i}>{s}</li>;
            })}
          </ul>
        </div>
        <a
          className={classes["project-link"]}
          href={props.link}
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
        <div className={classes["project-img_container"]}>
          <Image
            className={classes["project-img"]}
            src={props.image}
            alt="Brock Dallman Photography website screenshot"
          />
        </div>
      </div>
    );
}

export default ProjectAlt
