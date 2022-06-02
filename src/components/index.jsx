import { Aside } from "../Aside";
import { Section } from "../Section";
import "./styles.css";
export const Project = ({ tasks, onDelete }) => {
  return (
    <div className="project-layout">
      <Section tasks={tasks} onDelete={onDelete} />
      <Aside />
    </div>
  );
};
