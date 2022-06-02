import "./styles.css";
export const Header = ({ card, setCard }) => {
  
  const onAdd = () => {
    let newCard = [
      ...card,
    {
      title: Math.floor(Math.random() * 999),
      id: Math.random(),
    },
  ]
    setCard(
      newCard
    );
    console.log(card,"card");
    localStorage.setItem("cards", JSON.stringify(newCard));
  };
  const onSort = () => {
    setCard([...card.sort((a, b) => a.title - b.title)]);
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




// setCard((prev)=>{
//   // console.log(prev); 
//   return [

//   ...prev,
//   {
//     title: Math.floor(Math.random() * 999),
//      id: Math.random(),
//   }
// ]
// });