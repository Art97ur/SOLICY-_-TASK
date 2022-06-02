import { useEffect, useState } from "react";
import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/Header";
import { ProjectPage } from "./ProjectPage";

function App() {
  const [tasks, setTasks] = useState([]);
  const onDelete = (todo) => {
    setTasks((prev) => {
      const newResalt = prev.filter((t) => t.id !== todo.id);
      localStorage.setItem("cards", JSON.stringify(newResalt));
      return newResalt;
    });
  };

  useEffect(() => {
    let getDataStorage = JSON.parse(localStorage.getItem("cards"));
    if (localStorage.getItem("cards")) {
      setTasks([...getDataStorage]);
    }
  }, []);

  return (
    <div className="App">
      <Header tasks={tasks} setTasks={setTasks} />
      <ProjectPage tasks={tasks} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
