import TodoIcon from "./assets/direct-hit.png"
import DoingIcon from "./assets/fire.png"
import DoneIcon from "./assets/check-mark-button.png"
import "./App.css"
import TaskForm from './components/TaskForm'
import TaskColum from './components/TaskColum'
import { useState ,useEffect} from "react"

const savedTasks = JSON.parse(localStorage.getItem('tasks'))

const App = () => {
  const [tasks,setTasks] = useState(savedTasks || [])
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
    
  },[tasks])

  const handleMoveTo = (taskIndex,newStatus) =>{

    const updatedTask = {...tasks[taskIndex]} 
    updatedTask.status = newStatus
    const newTaskList = tasks.filter((task,index)=>{
      return index !== taskIndex

    })

    setTasks([...newTaskList,updatedTask])
   
  }

  
  const handleDelete = (taskIndex) =>{
       
    const newTaskList = tasks.filter((task,index)=>{
      return index !== taskIndex

    })
    setTasks(newTaskList)
  } 

  return (
    <div className='app'> 
      <TaskForm setTasks = {setTasks}/>
      <main className='app_main'>
        <TaskColum title="To Do" tasks = {tasks} handleDelete={handleDelete} handleMoveTo={handleMoveTo} icon={TodoIcon}/>
        <TaskColum title="Doing" tasks={tasks} handleDelete={handleDelete} handleMoveTo={handleMoveTo} icon={DoingIcon}/>
        <TaskColum title="Done" tasks={tasks} handleDelete={handleDelete} icon={DoneIcon}/>
        
      </main>
    
    </div>
  )
}

export default App