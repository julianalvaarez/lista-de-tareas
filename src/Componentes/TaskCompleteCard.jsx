import { useContext , useState } from "react";
import {TaskContext} from '../context/TaskContext';

//? La card de la tarea
export default function TaskCompleteCard({task}) {

  const {deleteTask, deleteCompleteTask} = useContext(TaskContext)



  return (
      <div className="bg-gray-700 opacity-50 text-white p-4 rounded-md">
        <h1 className="text-xl font-bold capitalize">{task.title}</h1>
        <p className="text-gray-400 text-sm">{task.descripcion}</p>
        <div className="flex justify-between">
          <button 
            className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
            onClick={()=>{deleteCompleteTask(task.id)}}>
            Eliminar Tarea
            </button> {/* Se ejecuta deleteTask y se pasa como parametro de TaskId el id del objeto */}
        </div>
      </div>
  )
}