import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
const FormularioTareas = ({tareas,setTareas}) => {
    
    const [inputTareas, setinputTareas] = useState('');
    
    const handleInput=(e)=> {
        setinputTareas(e.target.value);
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        setTareas(
            [
                ...tareas,
            {
                id:uuidv4(),
                texto:inputTareas,
                completada:false
            }
        ]);
        setinputTareas('');
    };
    
    return (
        <>
        <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
        <input type="text"
            className="formulario-tareas__input"
            placeholder="Escribe una tarea"
            value={inputTareas}
            onChange={(e)=>handleInput(e)}
            />
        <button type="submit"
            className="formulario-tareas__btn"
            ><FontAwesomeIcon
            icon={faPlusSquare} 
            className="formulario-tareas__icono-btn"/>  
            </button>       
        </form>
        </>
      );
}
 
export default FormularioTareas;