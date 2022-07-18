import "../Home/Home.scss";
import React, { Component } from "react";
import Header from "../Header/Header";
// import background1 from '../../assets/Images/background1.jpg'

export default class Home extends Component {
  render() {
    return (
      <section className="home">
        <div className="home__container">
          <p className="home__date">2022</p>
          <h1 className="home__portfolio">Portfolio</h1>
          <p className="home__name">Hi, i'm Alexia. </p>
          {/* <p className="home__description">
            I am a fullstack developer, with a strong interest in front-end, based in Toronto, Ontairo. I am
            perpetually curious, and inquisivtive, with a deep routed passion
            for solving tough problems. I love to know how why things work, why
            they work. I used to work with science, but now I work with code.
          </p> */}
        
        </div>
        <div className="home__header-container">
          <Header />
        </div>
        
      </section>
    );
  }
}
