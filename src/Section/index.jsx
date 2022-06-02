import { CardComponent } from "../CardComponent"
import { CARD_DATA } from "../components/consts"
import "./styles.css"

export const Section = ({card,setCard,onDelete}) =>{
    
    return (
        <section className="section">
            {card.map((item,index)=>{
                return <CardComponent key={index} title={item.title}card ={card} onDelete={onDelete}/>
            })}
        </section>
    )
}