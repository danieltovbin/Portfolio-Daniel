import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./style.scss";
import { projects } from "./projects";

const ProjectCard = () => {
  return (
    <div className="project-card">
      {projects.map((card) => (
        <Card className="card" key={card.id}>
          <div>
            <Card.Img variant="top" src={card.img} alt={card.title}/>
          </div>
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
            <Card.Text>More details on GitHub</Card.Text>
          </Card.Body>
          <Card.Body className="buttons">
            <Button          
              onClick={() => window.open(card.deployed, "_blank")}
              disabled={!card.deployed}
            >
              Deployed
            </Button>
            <Button
              onClick={() => window.open(card.github, "_blank")}
              disabled={!card.github}
            >
              Github
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ProjectCard;
