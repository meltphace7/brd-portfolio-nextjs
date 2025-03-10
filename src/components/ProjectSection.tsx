import React from "react";
import classes from "./ProjectSection.module.css";
import TrailTrackerIMG from "../../public/assets/imgs/trail-tracker_screen-shot-1.jpg";
import BDPhotographyIMG from "../../public/assets/imgs/bdphotography_screen-shot-1.jpg";
import AetherIMG from "../../public/assets/imgs/AETHER_SCREENSHOT.jpg";
import AlpinePrintsIMG from "../../public/assets/imgs/alpine-prints_screen-shots-1.jpg";
import TietonIMG from "../../public/assets/imgs/TIETON_SCREENSHOT.jpg";
import RojosIMG from "../../public/assets/imgs/rojos-screenshot.jpg";
import BDArtIMG from "../../public/assets/imgs/BDART_SCREENSHOT.jpg";
import SummitviewIMG from '../../public/assets/imgs/SUMMITVIEW-REALTY_SCREENSHOT.jpg'
import OlympicCrestIMG from "../../public/assets/imgs/olympic-crest-marine-screenshot.jpg";
import SanaiIMG from "../../public/assets/imgs/sanai-screenshot.jpg";
import MobileProjectsSection from "./MobileProjectsSection";
import Project from "./projects/Project";
import ProjectAlt from "./projects/ProjectAlt";


const ProjectsSection: React.FC = () => {

  return (
    <section id="projects" className={classes["projects-section"]}>
      <h1 className="section-title">Projects</h1>

      <div className={classes["projects"]}>
        <Project
          title="Trail Tracker"
          description="Trail Tracker is a React app that allows a user to discover new
                trails as well as add their own. Each trail profile contains
                data including images, a trail description, weather data,
                coordinates a map of the trailhead and more. Users can submit a trail
                after creating an account and can edit and delete their
                respective trails after submitting.  Trail Tracker utilizes a NodeJS API which interacts with a Mongo Database.  The API sanitzes user data, handles secure authentication/sessions with JSON web tokens as well as fetching trail data from the database."
          link="https://trailtracker.vercel.app/"
          image={TrailTrackerIMG}
          stack={["React", "NodeJS", "Express", "MongoDB", "AWS"]}
        />

        <ProjectAlt
          title="Brock Dallman Photography"
          description="Brock Dallman Photography is my fully responsive, personal
                landscape photography site. There you can find photo galleries,
                a blog of my backpacking/photography adventures, an online shop
                and more. Also features an admin dashboard for the shop where I can add, edit
                and delete products as well as manage orders."
          link="https://www.brockdallmanphotography.com/"
          image={BDPhotographyIMG}
          stack={["NextJS", "React", "MongoDB", "AWS"]}
        />

        <Project
          title="Summitview Realty"
          description="Summitview Realty is a fully responsive, custom Wordpress theme I developed for a real estate company.  It utilizes custom post types and Advanced Custom Fields to give the site admin the ability to manage Realtors and Listings from their Wordpress Admin menu.  Each listing features an image gallery, image slider as well as home information.  The site also has a contact form which utilizes an SMTP Mailer to deliver user emails to the admin's email."
          link="https://summitview-realty.com/"
          image={SummitviewIMG}
          stack={["Wordpress", "PHP", "Javascript", "SASS"]}
        />
        <ProjectAlt
          title="Olympic Crest Marine"
          description="Olympic Crest Marine is a fully responsive, custom Wordpress theme I developed for a boat dealership.  Leveraging the power of custom post types and Advanced Custom Fields, it allows the site admin to manage their boat inventory from the Wordpress Admin dashboard.  There they can add images, information and specs for each boat.  The site also has a contact form which utilizes an SMTP Mailer to deliver user emails to the admin's email."
          link="#"
          image={OlympicCrestIMG}
          stack={["Wordpress", "PHP", "Javascript", "SASS"]}
        />
        <Project
          title="Sanai"
          description="Sanai is a fully responsive website I created for an AI startup.  It was created with Divi, a no code theme builder, which gives the client more control over their website.  The site features a clean, user friendly design and a contact form."
          link="https://sanai.ai/"
          image={SanaiIMG}
          stack={["Wordpress", "Divi"]}
        />
        <ProjectAlt
          title="Aether"
          description="Aether is a website for a web design/development company.  I went with a dark futuristic style.  The landing page features many animations and is designed to be bold and provocative as to capture the user's attention.  The goal with Aether was to push my design skills to the limits and provide a memorable user experience."
          link="https://aether-meltphace7.vercel.app/"
          image={AetherIMG}
          stack={["NextJS", "React"]}
        />

        <Project
          title="Tieton Construction"
          description="Tieton Constuction is a business website made with NextJS. This
                website is totally responsive and features the standard pages
                found in a typical construction company website. It also
                features a project portfolio gallery complete with an image
                slider. Aside from the website I also designed the company's
                logo."
          link="https://tieton-construction-nextjs.vercel.app/"
          image={TietonIMG}
          stack={["NextJS", "React"]}
        />
        <ProjectAlt
          title="Brock Dallman Art"
          description="Brock Dallman Art is my fully responsive personal art website.
                Created with NextJS, brockdallmanart.com utilizes NextJS
                features like server side rendering, file based routing, dynamic
                image optimization, improved SEO and a built in backend API.  It features a gallery, image slider, and online shop."
          link="https://www.brockdallmanart.com/"
          image={BDArtIMG}
          stack={["NextJS", "React", "MongoDB", "AWS"]}
        />

        <Project
          title="Rojo's Mexican Cuisine"
          description="Rojo's Mexican Cuisine is a business website for a small scale restaurant.  I went with a more whimsical design which featured a vibrant color scheme and lots of mouth watering images of food.  The site features menu, about, catering and contact pages.  It is fully responsive and is sure to whet any user's appetite."
          link="https://rojosmexicancuisine.vercel.app/"
          image={RojosIMG}
          stack={["NextJS", "React"]}
        />
        <ProjectAlt
          title="Alpine Prints"
          description="Alpine Prints is a website for a print company. I designed
                it to be easily configurable to fit the needs of a small
                business. It features on online shop, user signup, login,
                accounts, authentication and administrator privileges. A
                business owner can sign in as admin and add, edit and delete
                products, and manage orders."
          link="https://alpineprints.vercel.app/home"
          image={AlpinePrintsIMG}
          stack={["React", "NodeJS", "Express", "MongoDB", "AWS"]}
        />
      </div>
      <MobileProjectsSection />
    </section>
  );
};

export default ProjectsSection;
