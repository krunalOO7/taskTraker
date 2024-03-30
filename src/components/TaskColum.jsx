
import TaskCard from "./TaskCard"
import "./TaskColumn.css"


const TaskColum = ({title,icon,tasks,handleDelete,handleMoveTo}) => {
  
  return (
    <section className='task_column'> 
        <h2 className="task_column_heading">
           <img className="task_column_icon" src={icon} alt="To do list icon"/>{title}
        </h2>
        {
          tasks.map((item,index)=>{
            
            return item.status === title?
            <TaskCard 
            key={index} index={index} 
            status={item.status}
            handleDelete={handleDelete} 
            handleMoveTo={handleMoveTo}
            item={item}/>:null
          })
        }
        
    </section>
  )
}

export default TaskColum