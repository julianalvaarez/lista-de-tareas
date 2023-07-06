import { createContext, useState, useEffect } from "react";
            //? Ya que hay 2 const con el mismo nombre, asi renombramos esta variable como "data"
import { tasks as data } from "../data/tareas";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState(()=>{
    const storedTasks = localStorage.getItem('tasks')
    return storedTasks ? JSON.parse(storedTasks) : [];
  }); //? Creamos la variable de las tareas y por defecto le damos de valor un array vacio

  const [completeTasks, setCompleteTasks] = useState(()=>{
    const storedCompleteTasks = localStorage.getItem('completeTasks')
    return storedCompleteTasks ? JSON.parse(storedCompleteTasks) : [];
  }); //? Creamos la variable de las tareas y por defecto le damos de valor un array vacio

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

  useEffect(() => {
    localStorage.setItem("completeTasks", JSON.stringify(completeTasks));
  }, [completeTasks])
  


  function createTask(taskTitle, taskDescription) {
    setTasks([...tasks,  //? Al ejecutar la funcion, actualizamos el estado de las tareas agregandole lo que escribimos en el form
      {
        title: taskTitle, 
        id: tasks.length, //? Pasamos como propiedades el titulo y la descripcion que esta en TaskForm.jsx
        descripcion: taskDescription,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId)); 
    localStorage.removeItem(taskId)
  }

  function finishTask(taskTitle, taskDescription, taskId) {
    setCompleteTasks([...completeTasks,  
      {
        title: taskTitle, 
        id: completeTasks.length, 
        descripcion: taskDescription,
      },
    ]);
    setTasks(tasks.filter((task) => task.id !== taskId))
    localStorage.removeItem(taskId)
    console.log(completeTasks);
  }



  function deleteCompleteTask(taskId) {
    const updatedCompleteTasks = completeTasks.filter((task) => task.id !== taskId);
    setCompleteTasks(updatedCompleteTasks);
    localStorage.setItem("completeTasks", JSON.stringify(updatedCompleteTasks));
  }
  



  return (
    <TaskContext.Provider value={{
        tasks,
        completeTasks,
        deleteTask,
        deleteCompleteTask,
        createTask,
        finishTask
    }}>{props.children}</TaskContext.Provider>
  );
}
