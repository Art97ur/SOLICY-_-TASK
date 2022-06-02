import { RANDOM_NUMBER } from "../components/consts";
import "./styles.css"

export const CardComponent = ({title,onDelete}) => {
    return (
         <div className="card">
             <i onClick={onDelete} className='bx bx-message-x'></i>
             <h2>{title}</h2>
         </div>
    );
};
