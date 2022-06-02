import { CardComponent } from "../CardComponent";
import "./styles.css";

export const Section = ({ tasks, onDelete }) => {
  return (
    <section className="section">
      {tasks.map((todo, index) => {
        return (
          <CardComponent
            key={index}
            title={todo.title}
            tasks={tasks}
            onDelete={onDelete}
            todo={todo}
          />
        );
      })}
    </section>
  );
};
