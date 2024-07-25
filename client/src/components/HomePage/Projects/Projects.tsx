import Title from "../../Title/Title";
import "../style.scss";
import ProjectCard from "./ProjectCard/ProjectCard";
import './style.scss';

const Projects = () => {
  return (
    <div id="projects" className="same-container">
      <Title title={"PROJECTS"} />
      <p className="para-on-sm-screens">Scroll sideways to see more projects</p>
      <ProjectCard />
    </div>
  );
};

export default Projects;
