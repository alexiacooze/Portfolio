import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";
import "../Projects/Projects.scss";
import brainflix from "../../assets/Images/brainflix.png";
import flash from "../../assets/Images/flash.png";
import instock from "../../assets/Images/instock.png"
import chat from "../../assets/Images/chat.png";
import apple from "../../assets/Images/apple.png";

export default class Projects extends Component {
  render() {
    return (
      <section className="projects">
        <div className="projects__header-container">
          <Header />
        </div>

        <div className="projects__options-container">
          <ul className="projects__item-container">
            <NavLink
              to="/apple"
              style={{ textDecoration: "none", listStyleType: "none" }}
            >
              <li className="projects__item">
                <img
                  src={apple}
                  alt="Apple clone"
                  className="projects__image"
                ></img>
                <p className="projects__name">Apple Clone</p>
              </li>
            </NavLink>
            <NavLink
              to="/flash"
              style={{ textDecoration: "none", listStyleType: "none" }}
            >
              <li className="projects__item ">
                <img src={flash} alt="avro" className="projects__image"></img>
                <p className="projects__name">Flash</p>
              </li>
            </NavLink>            
            <NavLink
              to="/instock"
              style={{ textDecoration: "none", listStyleType: "none" }}
            >
              <li className="projects__item">
              <img src={instock} alt="InStcok" className="projects__image"></img>
                <p className="projects__name">InStock</p>
              </li>
            </NavLink>
            <NavLink
              to="/chatbot"
              style={{ textDecoration: "none", listStyleType: "none" }}
            >
              <li className="projects__item">
                <img
                  src={chat}
                  alt="chatbot"
                  className="projects__image-bot"
                ></img>
                <p className="projects__name">Chatbot</p>
              </li>
            </NavLink>
            <NavLink
              to="/brainflix"
              style={{ textDecoration: "none", listStyleType: "none" }}
            >
              <li className="projects__item">
                <img
                  src={brainflix}
                  alt="brainflix"
                  className="projects__image-bot"
                ></img>
                <p className="projects__name">Brianflix</p>
              </li>
            </NavLink>
            
          </ul>
        </div>
      </section>
    );
  }
}
