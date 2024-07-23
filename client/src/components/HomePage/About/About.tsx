import resume from "../../../assets/CV-Daniel-Tovbin.pdf";
import profileAbout from "../../../assets/profileAbout.png";
import Title from "../../Title/Title";

import "../style.scss";
import "./style.scss";

const About = () => {
  return (
    <div id="about" className="same-container">
      <div>
        <Title title={"ABOUT ME"} />
        <div className="about">
          <div className="img-container">
            <img src={profileAbout} alt="profileImg" />
          </div>
          <div className="details-container">
            <p className="developer">
              I'm a Full Stack Developer
              <span className="info">
                | Enthusiastic about building interactive and accessible web
                applications.
              </span>
            </p>
            <div className="details">
              <p>
                Name: <span className="info">Daniel Tovbin</span>
              </p>
              <p>
                Phone: <span className="info">+972 543035701</span>
              </p>
              <p>
                Email: <span className="info">tovbindaniel@gmail.com</span>
              </p>
              <p>
                Language: <span className="info">Hebrew, English, Russian</span>
              </p>
              <a href={resume} download className="main-btn" id="resume">
                <span>Download CV</span>
                <span>
                  <i className="bi bi-download"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
