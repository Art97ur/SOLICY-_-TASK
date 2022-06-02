import { useCallback, useEffect, useState } from "react";
import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/Header";
import { ProjectPage } from "./ProjectPage";

function App() {
 let getDataStorage = JSON.parse(localStorage.getItem("cards"))

  const [card, setCard] = useState([]);
  const onDelete = (todo) =>{
      setCard(card.filter((t)=> t.id !== todo.id))
       localStorage.setItem("cards",JSON.stringify([...card]) )
    }
   useEffect(()=>{
    if(localStorage.getItem("cards")){
      setCard([...getDataStorage])
    }
   },[])
  
  return (
    <div className="App">
      <Header card={card} setCard={setCard} />
      <ProjectPage card={card} setCard={setCard} onDelete = {onDelete} />
      <Footer />
    </div>
  );
}

export default App;
