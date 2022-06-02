import "./styles.css";
export const Header = ({ tasks, setTasks }) => {
  const onAdd = () => {
    let newCard = [
      ...tasks,
      {
        title: Math.floor(Math.random() * 999),
        id: Math.random(),
      },
    ];
    setTasks(newCard);
    localStorage.setItem("cards", JSON.stringify(newCard));
  };
  const onSort = () => {
    setTasks([...tasks.sort((a, b) => a.title - b.title)]);
    localStorage.setItem(
      "cards",
      JSON.stringify([...tasks.sort((a, b) => a.title - b.title)])
    );
  };

  return (
    <header className="layout-header">
      <button onClick={onAdd} className="btn-add">
        Add Card
      </button>
      <button onClick={onSort} className="btn-sort">
        Sort Card
      </button>
    </header>
  );
};
