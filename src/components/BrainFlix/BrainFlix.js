import React from "react";
import "../BrainFlix/BrainFlix.scss";
import brainflixDemo from "../../assets/Videos/BrainFlixDemo.mp4";
import backArrow from "../../assets/Images/back-arrow.png";
import { NavLink } from "react-router-dom";

export default function BrainFlix() {
  return (
    <section className="brainflix">
      <div>
        <NavLink to="/projects">
          <div className="brainflix__back-container">
            <img className="brainflix__back-arrow" src={backArrow} alt="" />
          </div>
        </NavLink>
        <div className="brainflix__container">
          <div className="brainflix__title-container">
            <p className="brainflix__title">BrainFlix</p>
          </div>
          <div className="brainflix__demo-container">
            <video width="750" height="500" controls className="brainflix__demo-video">
              <source
                src={brainflixDemo}
                className="brainflix__demo"
                type="video/mp4"
              />
            </video>
            <a
              style={{ textDecoration: "none" }}
              href="https://brainflix-clone.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              {/* <p className="brainflix__link">
                Deployed website: https://brainflix-dupe.herokuapp.com/
              </p> */}
            </a>
          </div>
        </div>
        <div>
          <p className="brainflix__description-title">Description:</p>
          <p className="brainflix__description">
          This project is created to mimic a video streaming application, where users can comment, play and upload videos.
          </p>

          <p className="brainflix__install">Code Installation:</p>
          <p className="brainflix__install-description">
            The repositories/ code can be found within github. 
          </p>
          <p className="brainflix__github-link">Github: https://github.com/alexiacooze/Brainflix-3</p>
        </div>
      </div>
    </section>
  );
}
