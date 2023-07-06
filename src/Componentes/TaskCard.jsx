import { useContext , useState } from "react";
import {TaskContext} from '../context/TaskContext';
import "../checkbox.css"

//? La card de la tarea
export default function TaskCard({task}) {

  const {deleteTask, finishTask} = useContext(TaskContext)

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (isChecked === false) {
      finishTask(task.title, task.descripcion, task.id) 
    }    
  };


  return (
      <div className="bg-gray-800 text-white p-4 rounded-md">
        <h1 className="text-xl font-bold capitalize">{task.title}</h1>
        <p className="text-gray-400 text-sm">{task.descripcion}</p>
        <div className="flex justify-between">
          <button 
            className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
            onClick={()=>{deleteTask(task.id)}}>
            Eliminar Tarea
            </button> {/* Se ejecuta deleteTask y se pasa como parametro de TaskId el id del objeto */}
            <label className="switch self-center">
              <input type="checkbox" onChange={handleCheckboxChange}/>
              <span className="slider">
                <svg className="slider-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><path fill="none" d="m4 16.5 8 8 16-16"></path></svg> 
              </span>
            </label>
        </div>
      </div>
  )
}
