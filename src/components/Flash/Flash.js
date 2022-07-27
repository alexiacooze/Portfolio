import React from "react";
import "../Flash/Flash.scss";
import flashDemo from "../../assets/Videos/FlashDemo.mp4";
import backArrow from "../../assets/Images/back-arrow.png";
import { NavLink } from "react-router-dom";

export default function Flash() {
  return (
    <section className="flash">
      <div>
        <NavLink to="/projects">
          <div className="flash__back-container">
            <img className="flash__back-arrow" src={backArrow} alt="" />
          </div>
        </NavLink>
        <div className="flash__title-container">
          <p className="flash__title">Flash</p>
        </div>
        <div className="flash__demo-container">
          <video width="750" height="500" controls>
            <source src={flashDemo} className="flash__demo" type="video/mp4" />
          </video>
          <a
            style={{ textDecoration: "none" }}
            href="https://flash-client.herokuapp.com/home"
            target="_blank"
            rel="noreferrer"
          >
            <p className="flash__link">
              Deployed website: https://flash-client.herokuapp.com/home
            </p>
          </a>
        </div>
        <p className="flash__description-title">Description</p>
        <p className="flash__description">
          This project is an online study tool that has FREE pre-generated
          flashcard-style questions to aid in learning the core concepts of
          front-end development.
        </p>
        <p className="flash__install">Installation and Code:</p>
        <p className="flash__install-description">
          The repositories/ code can be found within github. If you are
          interested in downloading the code, you will need to click on the
          GitHub link below, where you will need to navigate to the bottom of
          the page. Near the bottom there will be a document that says
          README.md, which will include all of the essential iETAIL, EMPHESIIZE
          THAT ormation for downloading the codebase, running the front end
          browser, and backend server from your own computer.
        </p>

        <p className="apple__github-link">
          Github: https://github.com/alexiacooze/Apple-Website-Dupe
        </p>
      </div>
    </section>
  );
}
