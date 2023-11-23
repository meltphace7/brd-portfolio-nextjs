import React from "react";
import classes from "./ProjectSection.module.css";
import Image from "next/image";
import TrailTrackerIMG from "../../public/assets/imgs/trail-tracker_screen-shot-1.jpg";
import BDPhotographyIMG from "../../public/assets/imgs/bdphotography_screen-shot-1.jpg";
import AlpinePrintsIMG from "../../public/assets/imgs/alpine-prints_screen-shots-1.jpg";
import TietonIMG from "../../public/assets/imgs/TIETON_SCREENSHOT.jpg";
import BeerQuestIMG from "../../public/assets/imgs/BEER-QUEST_SCREENSHOT.jpg";
import BDArtIMG from "../../public/assets/imgs/BDART_SCREENSHOT.jpg";
import MobileProjectsSection from "./MobileProjectsSection";

import Project from "./projects/Project";
import ProjectAlt from "./projects/ProjectAlt";

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className={classes["projects-section"]}>
      <h1>Projects</h1>

      <div className={classes["projects"]}>

        <Project
          title="Trail Tracker"
          description="Trail Tracker is a React app that allows a user to discover new
                trails as well as add their own. Each trail profile contains
                data including images, a trail description, weather data,
                coordinates and a map of the trailhead. Users can submit a trail
                after creating an account and can edit and delete their
                respective trails after submitting."
          link="https://trailtracker.vercel.app/"
          image={TrailTrackerIMG}
          stack={["React", "NodeJS", "Express", "MongoDB", "AWS"]}
        />

        <ProjectAlt
          title="Brock Dallman Photography"
          description="Brock Dallman Photography is my fully responsive, personal
                landscape photography site. There you can find photo galleries,
                a blog of my backpacking/photography adventures, an online shop
                and more. Also features an admin dashboard where I can add, edit
                and delete products as well as manage orders."
          link="https://www.brockdallmanphotography.com/"
          image={BDPhotographyIMG}
          stack={["NextJS", "React", "MongoDB", "AWS"]}
        />
        <Project
          title="Alpine Prints"
          description="Alpine Prints is a website for a fictitious company. I designed
                it to be easily configurable to fit the needs of a small
                business. It features on online shop, user signup, login,
                accounts, authentication and administrator privileges. A
                business owner can sign in as admin and add, edit and delete
                products, and manage orders."
          link="https://alpineprints.vercel.app/home"
          image={AlpinePrintsIMG}
          stack={["React", "NodeJS", "Express", "MongoDB", "AWS"]}
        />

        <ProjectAlt
          title="Tieton Construction"
          description="Tieton Constuction is a business website made with NextJS. This
                website is totally responsive and features the standard pages
                found in a typical construction company website. It also
                features a project portfolio gallery complete with an image
                slider. Aside from the website I also designed the companies
                logo."
          link="https://tieton-construction-nextjs.vercel.app/"
          image={TietonIMG}
          stack={["React", "NextJS"]}
        />
        <Project
          title="Brock Dallman Art"
          description="Brock Dallman Art is my fully responsive personal art website.
                Created with NextJS, brockdallmanart.com utilizes NextJS
                features like server side rendering, file based routing, dynamic
                image optimization, improved SEO and a built in API."
          link="https://www.brockdallmanart.com/"
          image={BDArtIMG}
          stack={["NextJS", "React", "MongoDB", "AWS"]}
        />

        <ProjectAlt
          title="Beer Quest"
          description="Tieton Constuction is a business website made with NextJS. This
                website is totally responsive and features the standard pages
                found in a typical construction company website. It also
                features a project portfolio gallery complete with an image
                slider. Aside from the website I also designed the companies
                logo."
          link="https://beer-quest.vercel.app/"
          image={BeerQuestIMG}
          stack={["React"]}
        />
      </div>
      <MobileProjectsSection />
    </section>
  );
};

export default ProjectsSection;
