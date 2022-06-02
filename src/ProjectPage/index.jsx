import { Project } from "../components";

export const ProjectPage = ({ tasks, onDelete }) => {
  return <Project tasks={tasks} onDelete={onDelete} />;
};
