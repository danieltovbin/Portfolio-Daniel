import { useAppSelector } from "../../../app/hooks";
import Title from "../../Title/Title";
import "../style.scss";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./style.scss";

const Projects = () => {
  const isSmallScreen = useAppSelector((state) => state.screen.isSmallScreen);

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
