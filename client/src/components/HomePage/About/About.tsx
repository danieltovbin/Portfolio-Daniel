import resume from "../../../assets/CV-Daniel-Tovbin.pdf";
import profileAbout from "../../../assets/profileAbout.png";
import Title from "../../Title/Title";
import { details } from "./details";
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
              {details && details.map((detail) => (
                <>
                <p>
                {detail.title} <span className="info">{detail.detail}</span>
              </p>
                </>
              ))}
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
