import { CardComponent } from "../CardComponent"
import { CARD_DATA } from "../components/consts"
import "./styles.css"

export const Section = ({card,setCard,onDelete}) =>{
   
    return (
        <section className="section">
            {card.map((todo,index)=>{
                return <CardComponent key={index} title={todo.title} card ={card} onDelete={onDelete} todo={todo}/>
            })}
            
        </section>
    )
}