import React from "react";
import Image from "next/image";
import classes from "./Project.module.css";

interface ProjectsProps {
  title: string;
  description: string;
  stack: string[];
  image: any;
  link: string;
}

const Project: React.FC<ProjectsProps> = (props) => {
  return (
    <div className={classes["project"]}>
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
          alt="trail tracker website screenshot"
        />
      </div>
      <div className={classes["project-text"]}>
        <div className={`${classes["project-header"]} ${classes["tt-header"]}`}>
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
        <div className={classes["project-description"]}>
          <p>{props.description}</p>
        </div>
        <ul className={classes["project-technologies"]}>
          {props.stack.map((s: string, i: number) => {
            return <li key={i}>{s}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Project;
