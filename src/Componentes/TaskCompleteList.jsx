import TaskCard from "./TaskCard";
import TaskCompleteCard from "./TaskCompleteCard";
import { useContext  } from "react";
import {TaskContext} from '../context/TaskContext';

export default function TaskCompleteList() {

  const {completeTasks} = useContext(TaskContext)

  if(completeTasks.length > 0) {
    return (
        <div className="mt-32">
            <h2 className="font-bold text-white text-4xl font-mono text-center mb-14">TAREAS COMPLETADAS</h2> 
            <div className="grid grid-cols-4 gap-3" id="tasks">                               
                {completeTasks.map((task) => (   //? Recorremos el objeto con las tareas y creamos un div con su informacion para cada tarea  
                    <TaskCompleteCard key={task.id} task={task} /> //? Pasamos como prop la tarea a TaskCard.jsx 
                ))}
            </div>
        </div>
      ); 
  }
}