import "./styles.css";

export const CardComponent = ({ title, onDelete, todo }) => {
  return (
    <div className="card">
      <i
        onClick={() => {
          onDelete(todo);
        }}
        className="bx bx-message-x"
      ></i>
      <h2>{title}</h2>
    </div>
  );
};
