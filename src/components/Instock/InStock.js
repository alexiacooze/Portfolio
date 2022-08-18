import React from "react";
import "../Instock/Instock.scss";
import instockDemo from "../../assets/Videos/InStockDemo.mp4";
import backArrow from "../../assets/Images/back-arrow.png";
import { NavLink } from "react-router-dom";

export default function InStock() {
  return (
    <section className="instock">
      <div>
        <NavLink to="/projects">
          <div className="instock__back-container">
            <img className="instock__back-arrow" src={backArrow} alt="" />
          </div>
        </NavLink>
        <div className="instock__container">
          <div className="instock__title-container">
            <p className="instock__title">InStock</p>
          </div>
          <div className="instock__demo-container">
            <video width="750" height="500" controls className="instock__demo-video">
              <source
                src={instockDemo}
                className="instock__demo"
                type="video/mp4"
              />
            </video>
            <a
              style={{ textDecoration: "none" }}
              href="https://instock-clone.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              {/* <p className="instock__link">
                Deployed website: https://instock-clone.herokuapp.com/
              </p> */}
            </a>
          </div>
        </div>
        <div>
          <p className="instock__description-title">Description:</p>
          <p className="instock__description">
          This project is an platform that tracks warehouses and warehouse specific inventory. The application is a CRUD application, that uses both a client side, and server side. The server side allows for the user to create, add, delete and edit warehouses, and warehouse inventory. 
          </p>

          <p className="instock__install">Code Installation:</p>
          <p className="instock__install-description">
            The repositories/ code can be found within github. 
          </p>
          <p className="instock__github-link">Github: https://github.com/alexiacooze/instock-Website-Dupe</p>
        </div>
      </div>
    </section>
  );
}
