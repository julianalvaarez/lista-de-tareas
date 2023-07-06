import { useState, useContext  } from "react";
import {TaskContext} from '../context/TaskContext';

export default function TaskForm() {
  const [taskTitle, setTaskTitle] = useState("");             //? Creamos el estado del titulo de la tarea y le damos de valor un string vacio
  const [taskDescription, setTaskDescription] = useState(""); //? Creamos el estado de la descripcion de la tarea y le damos de valor un string vacio

  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    if(taskTitle === ""){
      return alert("Necesitas ponerle un titulo a la tarea")
    }
    e.preventDefault();
    createTask(taskTitle, taskDescription);   //? Al enviar, ejecutamos la funcion de createTask y le pasamos como props el valor de titulo y desc.
    setTaskTitle("")          //? Asi reseteamos el valor del estado del titulo y de la descripcion
    setTaskDescription("")
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 ">
      <h1 className="text-2xl font-bold mb-3 text-white">Crea tu tarea</h1>
        <input className="bg-slate-300 p-3 w-full mb-2" value={taskTitle} type="text" placeholder="Titulo de la tarea" onChange={(e) => setTaskTitle(e.target.value)}/>
        <textarea className="bg-slate-300 p-3 w-full mb-2" value={taskDescription} type="text" placeholder="Descripcion de la tarea" onChange={(e) => setTaskDescription(e.target.value)}/>
        <button className="bg-indigo-500 px-3 py1 text-white hover:bg-indigo-700">Guardar</button>
      </form>
    </div>
  );
}
