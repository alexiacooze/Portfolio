import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";
import "../Projects/Projects.scss";
// import avro from "../../assets/Images/avro.jpeg";
import flash from "../../assets/Images/flash.png";
import goose from "../../assets/Images/goose.png"
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
              to="/apple-clone"
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
            {/* <NavLink
              to="/avro"
              style={{ textDecoration: "none", listStyleType: "none" }}
            >
              <li className="projects__item">
                <img src={avro} alt="avro" className="projects__image"></img>
                <p className="projects__name">Avro</p>
              </li>
            </NavLink> */}
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
              to="/canada-goose"
              style={{ textDecoration: "none", listStyleType: "none" }}
            >
              <li className="projects__item">
              <img src={goose} alt="goose" className="projects__image"></img>
                <p className="projects__name">Canada Goose</p>
              </li>
            </NavLink>
          </ul>
        </div>
      </section>
    );
  }
}

// {this.state.icons.map((image) => {
//   return (
//     <div key={image.id} className="projects__container">
//       <NavLink to={`/images/${image.id}`}>
//         <img
//           className="projects__gallery"
//           key={image.id}
//           src={image.imgSrc}
//           alt="projects"
//         />
//       </NavLink>
//         {/* <p>{image.title}</p> */}
//     </div>
//   );
// })}
