import ListSkills from "../../ListSkills/ListSkills";
import Title from "../../Title/Title";
import "../style.scss";

const Skills = () => {
  return (
    <div id="skills" className="same-container">
      <div>
        <Title title={"MY SKILLS"} />
        <ListSkills />
      </div>
    </div>
  );
};

export default Skills;
