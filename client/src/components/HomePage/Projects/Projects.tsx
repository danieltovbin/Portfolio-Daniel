import { useEffect, useState } from "react";
import Title from "../../Title/Title";
import "../style.scss";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./style.scss";

const Projects = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="projects" className="same-container">
      <Title title={"PROJECTS"} />
      {isSmallScreen && (
        <p className="para-on-sm-screens">
          Scroll sideways to see more projects
        </p>
      )}
      <ProjectCard />
    </div>
  );
};

export default Projects;
