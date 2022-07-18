import "../Contact/Contact.scss";
import Header from "../Header/Header";
import github from "../../assets/Images/github.png";
import linked from "../../assets/Images/linked-icon.png";

function Contact() {
  return (
    <section className="contact">
      <div className="about__header-container">
        <Header />
      </div>
      <div className="contact__container">
        <div className="contact__info-container">
          <p className="contact__name">Alexia Cooze</p>

          <div className="contact__linkedin-container">
            <a
              className="contact__linkedin-link"
              href="https://www.linkedin.com/in/alexia-cooze-b1a575197/"
              target="__blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
             
              <img
                className="contact__linkedin-social"
                src={linked}
                alt="Github"
              />
              <p className="contact__linked">Linkedin</p>
            </a>
          </div>
          <div className="contact__github-container">
            <a
              className="contact__github-link"
              href="https://github.com/alexiacooze"
              target="__blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}

            >
               <img
                className="contact__github-social"
                src={github}
                alt="Github"
              />
              <p className="contact__github">GitHub</p>
            </a>
          </div>
            <p className="contact__email">alexiacooze1@gmail.com</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
