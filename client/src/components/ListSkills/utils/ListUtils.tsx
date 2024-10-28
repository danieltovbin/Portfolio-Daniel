import { FC } from "react";
import { ListGroup } from "react-bootstrap";
import '../style.scss';

interface ListGroupProps {
  title: string;
  stack: string[];
}

const ListUtils: FC<ListGroupProps> = ({ title, stack }) => {
  return (
    <div className="list-container">
      <h2>{title}</h2>
      <div>
        <ListGroup>
          {stack &&
            stack.map((skill, index) => (
              <div key={index}>
                <ListGroup.Item action variant="secondary">
                  <i className="bi bi-check-square-fill"></i>
                  {skill}
                </ListGroup.Item>
              </div>
            ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default ListUtils;
