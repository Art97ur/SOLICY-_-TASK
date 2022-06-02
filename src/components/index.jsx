import { useState } from "react"
import { Aside } from "../Aside"
import { Section } from "../Section"
import { CARD_DATA } from "./consts"
import "./styles.css"
export const Project = ({card,setCard,onDelete})=>{
    
    return(
        <div className="project-layout">
            <Section card={card} setCard={setCard} onDelete ={onDelete}/>
            <Aside/>
      </div>
    )
}