
import "./styles.css";
export const Header = ({onAdd,card,setCard}) => {
    console.log(card);
      const onSort = () =>{
          setCard([
            ... card.sort((a,b)=> a.title -b.title)
          ])
      }

  return (
    <header className="layout-header">
      <button onClick={onAdd} className="btn-add">Add Card</button>
      <button onClick={onSort}  className="btn-sort">Sort Card</button>
    </header>
  );
};