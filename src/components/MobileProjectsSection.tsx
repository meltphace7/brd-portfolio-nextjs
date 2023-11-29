import React from "react";
import classes from "./MobileProjectsSection.module.css";
import trailTrackerIMG from "../../public/assets/imgs/trail-tracker_screen-shot-1.jpg";
import bdPhotographyIMG from "../../public/assets/imgs/bdphotography_screen-shot-1.jpg";
import alpinePrintsIMG from "../../public/assets/imgs/alpine-prints_screen-shots-1.jpg";
import beerQuestIMG from "../../public/assets/imgs/beer-quest_screen-shot-1.jpg";
import tietonIMG from "../../public/assets/imgs/TIETON_SCREENSHOT.jpg";
import rojosIMG from "../../public/assets/imgs/rojos-screenshot.jpg";
import bdArtIMG from "../../public/assets/imgs/BDART_SCREENSHOT.jpg";
import ProjectMobile from "../components/projects/ProjectMobile";

const MobileProjectsSection: React.FC = () => {
  return (
    <div className={classes["mobile-projects"]}>
      <ProjectMobile
        title="Trail Tracker"
        description="Trail Tracker is a react app that allows a user to discover new
              trails as well as add their own. Each trail profile contains data
              including images, a trail description, weather data, coordinates
              and a map of the trailhead. Users can submit a trail after
              creating an account and can edit and delete their respective
              trails after submitting."
        stack={["React", "NodeJS", "Express", "MongoDB", "AWS"]}
        image={trailTrackerIMG}
        link="https://trailtracker.vercel.app/"
      />

      <ProjectMobile
        title="Brock Dallman Photography"
        description="Brock Dallman Photography is my fully responsive, personal
              landscape photography site. There you can find photo galleries, a
              blog of my backpacking/photography adventures, an online shop and
              more. Also features an admin dashboard where I can add, edit and
              delete products as well as manage orders."
        stack={["NextJS", "React", "MongoDB", "AWS"]}
        image={bdPhotographyIMG}
        link="https://brockdallmanphotography.com/"
      />

      <ProjectMobile
        title="Alpine Prints"
        description="Alpine Prints is a website for a fictitious company. I designed it
              to be easily configurable to fit the needs of a small business. It
              features on online shop, user signup, login, accounts,
              authentication and administrator dashboard/privileges. A business
              owner can sign in as admin and add, edit and delete products, and
              manage orders."
        stack={["React", "NodeJS", "Express", "MongoDB", "AWS"]}
        image={alpinePrintsIMG}
        link="https://alpineprints.vercel.app/home"
      />

      <ProjectMobile
        title="Tieton Construction"
        description="Tieton Constuction is a business website made with NextJS. This
              website is totally responsive and features the standard pages
              found in a typical construction company website. It also features
              a project portfolio gallery complete with an image slider. Aside
              from the website I also designed the companies logo."
        stack={["NextJS", "React"]}
        image={tietonIMG}
        link="https://tieton-construction-nextjs.vercel.app/"
      />

      <ProjectMobile
        title="Brock Dallman Art"
        description="Brock Dallman Art is my fully responsive personal art website.
              Created with NextJS, brockdallmanart.com utilizes NextJS features
              like server side rendering, file based routing, dynamic image
              optimization, improved SEO and a built in API."
        stack={["NextJS", "React", "MongoDB", "AWS"]}
        image={bdArtIMG}
        link="https://brockdallmanart.com"
      />

      <ProjectMobile
        title="Rojo's Mexican Cuisine"
        description="Rojo's Mexican Cuisine is a business website for a small
              scale restaurant. I went with a more whimsical design which
              featured a vibrant color scheme and lots of images of food. The
              site features menu, about, catering and contact pages. It is fully
              responsive and is sure to whet any viewer's appetite."
        stack={["NextJS", "React"]}
        image={rojosIMG}
        link="https://rojosmexicancuisine.vercel.app/"
      />

      <ProjectMobile
        title="Beer Quest"
        description="Beer Quest is a React app that allows a user to search for
              breweries in a city. When the user selects a brewery, data is
              displayed like the phone number, address and a link to their
              website. When users click the address link, they are redirected to
              google maps with the address to the brewery plugged in. Users can
              save a brewery by adding it to their favorites which are stored on
              their browser in local storage."
        stack={["React"]}
        image={beerQuestIMG}
        link="https://beer-quest.vercel.app/"
      />
    </div>
  );
};

export default MobileProjectsSection;
