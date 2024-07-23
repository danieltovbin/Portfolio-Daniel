import ListGroup from "react-bootstrap/ListGroup";
import "./style.scss";
import { skills } from "./skills";

const ListSkills = () => {
  return (
    <div className="list-container">
      <ListGroup>
        {skills &&
          skills.map((skill, index) => (
            <div key={index}>
              <ListGroup.Item action variant="secondary">
                <i className="bi bi-check-square-fill"></i>
                {skill}
              </ListGroup.Item>
            </div>
          ))}
      </ListGroup>
    </div>
  );
};

export default ListSkills;
