import React from "react";
import classes from "./BioSection.module.css";
import Image from 'next/image';
import BioPic from "../../public/assets/imgs/BROCK_MTN-PORTRAIT-HQ.jpg";

const BioSection: React.FC = () => {
  return (
    <section id="about" className={classes["bio-section"]}>
      <h1 className="section-title">About Me</h1>
      <div className={classes["bio-container"]}>
        <div className={classes["bio-text"]}>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello! My name is
            Brock and I&apos;m a web developer. As a &nbsp;
            <a
              className={classes["bio-link"]}
              href="https://brockdallmanphotography.com/"
              target="_blank"
              rel="noreferrer"
            >
              photographer
            </a>
            &nbsp;and&nbsp;
            <a
              className={classes["bio-link"]}
              href="https://brockdallmanart.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              illustrator
            </a>
            , I wanted to learn how to make my own websites to display my work
            in a way that would give me absolute control over the design and
            user experience. I quickly became enthralled in the process and
            began to pursue web development as a career path.
          </p>
          <p>
            I started taking Udemy courses to expand my knowledge and skill set.
            Since learning Javascript, Node, MongoDB, Express and the React
            framework, I have been designing and coding a variety of projects,
            always prioritizing a responsive and user friendly design. My
            projects have included features such as online stores, user signup,
            login, accounts, authentication(JSON web tokens), admin privileges,
            CRUD operations, image uploads to AWS S3 buckets and more.
          </p>
          <p>
            I look forward to collaborating with you to create awesome,
            responsive and intuitive websites and applications that deliver a
            great user experience!
          </p>
        </div>
        <div className={classes["bio-img__container"]}>
          <Image src={BioPic} alt="Brock Dallman" />
        </div>
      </div>
    </section>
  );
};

export default BioSection;
