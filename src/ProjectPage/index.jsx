import { Project } from "../components";

export const ProjectPage = ({card,setCard,onDelete}) => {
    return (
         <Project card ={card}setCard={setCard} onDelete={onDelete}/>
    );
};
