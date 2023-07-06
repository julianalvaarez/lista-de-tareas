import TaskCard from "./TaskCard";
import TaskCompleteCard from "./TaskCompleteCard";
import { useContext  } from "react";
import {TaskContext} from '../context/TaskContext';

export default function TaskList() {

  const {tasks, completeTasks} = useContext(TaskContext)

  if(tasks.length === 0) {
    return <h2 className="text-white text-4xl font-mono font-bold text-center">No hay tareas pendientes</h2>;  //? Si la variable tasks esta vacia retornamos el h2
  }

  return (
    <div className="mt-12">
      <h2 className="font-bold text-white text-4xl font-mono text-center">TAREAS PENDIENTES</h2>                            
      <div className="grid grid-cols-4 gap-3" id="tasks">   
        {tasks.map((task) => (   //? Recorremos el objeto con las tareas y creamos un div con su informacion para cada tarea  
          <TaskCard key={task.id} task={task}/> //? Pasamos como prop la tarea a TaskCard.jsx 
        ))}
      </div>
    </div>
  );
}
