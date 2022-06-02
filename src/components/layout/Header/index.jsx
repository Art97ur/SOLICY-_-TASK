
import "./styles.css";
export const Header = ({onAdd,card}) => {
    // const onSort = () =>{
    //   let newArr = []
    //   card.forEach(element => {
    //       newArr.push(element.title)
    //   });
    //   return newArr.sort((a,b)=> console.log(a - b))
    // }
  return (
    <header className="layout-header">
      <button onClick={onAdd} className="btn-add">Add Card</button>
      <button  className="btn-sort">Sort Card</button>
    </header>
  );
};