import React from "react";
import "../About/About.scss";
import Header from "../Header/Header";
import avatar from "../../assets/Images/avatar.jpg";

export default function About() {
  return (
    <section className="about">
      <div className="about__header-container">
        <Header />
      </div>
      <div className="about__container">
        <div className="about__intro-container">
          <img className="about__avatar" src={avatar} alt="avatar" />
          <p className="about__intro-header">Welcome!</p>
        </div>
        <p className="about__paragraph">
          I am fullstack developer, based in Toronto, ON – focusing on front-end web development. I recently graduated from Queens University, where I majored in Health Sciences. After graduation I subsequently attended BrainStation's Web Development boot-camp. I am highly analytical, tenacious, and perpetually curious. I love to learn, and I am looking forward to working with a team that fosters innovation, and creativity – while I continue to advance my development skills! 
        </p>

        <p className="about__stack-title">
        Tech Stack: 
        </p>
        <p className="about__stack">
        HTML, CSS, SASS, JavaScript, JSX, Node.js, React, Redux, Express, JSON, Agile Development, MySQL, Document Object Model (DOM) APIs, Using and Creating RESTful APIs, Mobile and Desktop Design, Unit Testing, MVC Design, AEM Building Blocks, User Authentication, OAuth, Webpack, Heroku, Netlify, Git, Postman, and Jest.
        </p>
      </div>
    </section>
  );
}
