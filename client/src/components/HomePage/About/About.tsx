import { useAppSelector } from "../../../app/hooks";
import profileAbout from "../../../assets/profileAbout.png";
import Title from "../../Title/Title";
import "../style.scss";
import { details } from "./details";
import "./style.scss";

const About = () => {
  const isSmallScreen = useAppSelector((state) => state.screen.isSmallScreen);

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
              <tbody>
                {details &&
                  details.map((detail, index) => (
                    <tr key={index}>
                      <td className="title">{detail.title}</td>
                      <td className="info">{detail.detail}</td>
                    </tr>
                  ))}
              </tbody>
              <a
                href="https://www.linkedin.com/in/daniel-tovbin-319a44261/"
                download
                className="main-btn"
                id="resume"
              >
                <span>{isSmallScreen ? "CV" : "Download CV"}</span>
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
