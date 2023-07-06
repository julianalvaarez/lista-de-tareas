import TaskList from './Componentes/TaskList'
import TaskForm from './Componentes/TaskForm'
import TaskCompleteList from './Componentes/TaskCompleteList'


export function App() {
    return (    //? Retorna el TaskForm y pasa como prop la funcion de createTask y la TaskList y pasa como prop las tareas
    <div className='bg-slate-900 h-screen'>
     <div  id='app' className='bg-slate-900'>
            <div className='container mx-auto p-10'>
                <TaskForm/> 
                <TaskList/>
                <TaskCompleteList/>
            </div>
     </div>
    </div>
       
    ) 
}