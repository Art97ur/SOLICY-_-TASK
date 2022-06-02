import { useCallback, useState } from "react";
import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/Header";
import { ProjectPage } from "./ProjectPage";

function App() {
  const [card, setCard] = useState([]);
  const onAdd = useCallback(() => {
    setCard([
      ...card,
      {
        title: Math.floor(Math.random() * 100),
        id: Math.random()
      },
    ]);
  },[card]);

  const onDelete = () =>{
      // setCard(card.filter((item)=> item.id !== todo.id))
      console.log(card);

  }
  return (
    <div className="App">
      <Header card={card} setCard={setCard} onAdd={onAdd} />
      <ProjectPage card={card} setCard={setCard} onDelete = {onDelete} />
      <Footer />
    </div>
  );
}

export default App;
