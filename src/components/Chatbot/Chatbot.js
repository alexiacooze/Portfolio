import React from "react";
import "../Chatbot/Chatbot.scss";
import chatDemo from "../../assets/Videos/ChatbotDemo.mp4";
import backArrow from "../../assets/Images/back-arrow.png";
import { NavLink } from "react-router-dom";

export default function Chatbot() {
  return (
    <section className="chat">
      <NavLink to="/projects">
        <div className="chat__back-container">
          <img className="chat__back-arrow" src={backArrow} alt="" />
        </div>
      </NavLink>
      <div className="chat__container">
        <div className="chat__title-container">
          <p className="chat__title">Chat Bot</p>
        </div>
        <div className="chat__demo-container">
          <video width="750" height="500" controls className="chat__demo-video">
            <source src={chatDemo} className="chat__demo" type="video/mp4" />
          </video>
          <a
            style={{ textDecoration: "none" }}
            href="https://cleverbot-client.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            {/* <p className="chat__link">
            Deployed website: https://cleverbot-client.herokuapp.com/
            </p> */}
          </a>
        </div>
        <p className="chat__description-title">Description:</p>
        <p className="chat__description">
          This project is a chatbot that was created over a 24 hour hackathon.
          The chatbot mimics Apple inc.© Imessage UI, and uses the Cleverbot©
          artificial intelligence algorithm API – which results in a 'real life'
          simulated conversation between friends. Simply type in your message
          within the text bar to begin the conversation with the chatbot.
        </p>
        {/* <p className="chat__install">Code Installation:</p>
        <p className="chat__install-description">
          Currently, the API is not longer available. Please watch the recorded
          demo above to see chatbot in action! If you are interested in viewing
          the code, the github repositories are live at.{" "}
        </p>
        <a className="" href="" >
          <p className="chat__github">
            github: "https://github.com/alexiacooze/bandsite"
          </p>
        </a> */}
      </div>
    </section>
  );
}
