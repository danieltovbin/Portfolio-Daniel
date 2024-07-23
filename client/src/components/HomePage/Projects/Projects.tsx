import Title from "../../Title/Title";
import "../style.scss";
import ProjectCard from "./ProjectCard/ProjectCard";


const Projects = () => {
  return (
    <div id="projects" className="same-container">
      <Title title={"PROJECTS"} />
      <ProjectCard />
    </div>
  );
};

export default Projects;
