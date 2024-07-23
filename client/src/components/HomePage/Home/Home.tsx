import profileHome from "../../../assets/profileHome.png";
import Github from "../Contact/Github/Github";
import Linkedin from "../Contact/Linkedin/Linkedin";
import "../style.scss";
import "./style.scss";

const Home = () => {
  return (
    <div id="home" className="same-container">
      <div className="home">
        <img src={profileHome} alt="profileImg" />
        <h1>
          Hi There! I am <span>DANIEL TOVBIN</span>
        </h1>
        <p>
          I'm a Full Stack Developer, skilled in both frontend and backend
          development, passionate about building efficient, user-friendly web
          applications. With a solid education and hands-on experience, I'm
          ready to contribute effectively to any development team. Open to new
          opportunities—let's connect!
        </p>
        <div className="links">
          <Linkedin />
          <Github />
        </div>
      </div>
    </div>
  );
};

export default Home;
