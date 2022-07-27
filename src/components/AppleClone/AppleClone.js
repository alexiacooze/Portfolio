import React from "react";
import "../AppleClone/AppleClone.scss";
import appleDemo from "../../assets/Videos/AppleDemo.mp4";
import backArrow from "../../assets/Images/back-arrow.png";
import { NavLink } from "react-router-dom";

export default function AppleClone() {
  return (
    <section className="apple">
      <div>
        <NavLink to="/projects">
          <div className="apple__back-container">
            <img className="apple__back-arrow" src={backArrow} alt="" />
          </div>
        </NavLink>
        <div className="apple__container">
          <div className="apple__title-container">
            <p className="apple__title">Apple Clone</p>
          </div>
          <div className="apple__demo-container">
            <video width="750" height="500" controls>
              <source
                src={appleDemo}
                className="apple__demo"
                type="video/mp4"
              />
            </video>
            <a
              style={{ textDecoration: "none" }}
              href="https://apple-clone.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="apple__link">
                Deployed website: https://apple-clone.herokuapp.com/
              </p>
            </a>
          </div>
        </div>
        <div>
          <p className="apple__description-title">Description:</p>
          <p className="apple__description">
            This project is a Clone website of Apple inc.© watches page. The
            main purpose of this project is to display my overall front-end
            design capabilities. I treated the project as if i were given a
            mockup, with no pre-existing information/ additional aid. It is a
            single page application, which includes minimal functionality.
            Additional aspects such as hover effects were added to simulate
            interaction with the website. The code base was designed in mind of
            possibly building out the functionality in the future!
          </p>

          <p className="apple__install">Code Installation:</p>
          <p className="apple__install-description">
            The repositories/ code can be found within github. If you are
            interested in downloading the code, you will need to click on the
            GitHub link below, where you will need to navigate to the bottom of
            the page. Near the bottom there will be a document that says
            README.md, which will include all of the essential information for
            downloading the codebase, running the front end browser, and backend
            server from your own computer.
          </p>
          <p className="apple__github-link">Github: https://github.com/alexiacooze/Apple-Website-Dupe</p>
        </div>
      </div>
    </section>
  );
}
