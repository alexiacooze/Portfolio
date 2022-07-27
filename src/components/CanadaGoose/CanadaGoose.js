import React from "react";
import { NavLink } from "react-router-dom";
import "../CanadaGoose/CanadaGoose.scss";
import gooseDemo from "../../assets/Videos/GooseDemo.mp4";
import backArrow from "../../assets/Images/back-arrow.png";

export default function CanadaGoose() {
  return (
    <section className="goose">
      <div>
        <NavLink to="/projects">
          <div className="goose__back-container">
            <img className="goose__back-arrow" src={backArrow} alt="" />
          </div>
        </NavLink>
        <div className="goose__container">
          <div className="goose__title-container">
            <p className="goose__title">Canada Goose</p>
          </div>
          <div className="goose__demo-container">
            <video width="750" height="500" controls className="goose__demo-video">
              <source
                src={gooseDemo}
                className="goose__demo"
                type="video/mp4"
              />
            </video>
            <a
              style={{ textDecoration: "none" }}
              href="https://goose-clone.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
            </a>
          </div>
        </div>
        <div>
          <p className="goose__description-title">Description</p>
          <p className="goose__description">
            This project was a 24 hour collaborative hackaton, in which the
            groups were given the opportunity to work with Canada Goose©. The
            groups were given a presentation from the company on their beliefs,
            business plans, and recent additions. We were then asked to create a
            project that encompasses their company as a whole. My group chose to
            create an application that highlighted their desire for
            sustainability, online accessability and inclusivity. This project
            was front end specific, and was accomplished within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
