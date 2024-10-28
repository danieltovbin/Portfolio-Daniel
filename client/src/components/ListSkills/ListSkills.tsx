import { backendend, frontend, languages, tools } from "./skills";
import "./style.scss";
import ListUtils from "./utils/ListUtils";

const ListSkills = () => {
  return (
    <>
    <div className="stack">
      <ListUtils
       title="Languages" stack={languages}      
       />
      <ListUtils
       title="Frontend" stack={frontend}      
       />
      <ListUtils
       title="Backendend" stack={backendend}      
       />
      <ListUtils
       title="Tools" stack={tools}      
       />
    </div>
    </>
  );
};

export default ListSkills;
