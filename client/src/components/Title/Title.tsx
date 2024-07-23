import { FC } from "react";
import "./style.scss";

interface TitleProps {
  title: string;
}

const Title: FC<TitleProps> = ({ title }) => {
  return (
    <div className="title">
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
