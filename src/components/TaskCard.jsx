import Tag from "./Tag"
import "./TaskCard.css"
import DeleteIcon from "../assets/delete.png"
import done from "../assets/done.png"
import working from "../assets/working.png"
import Todo from "../assets/to-do-list.png"



const TaskCard = ({item,handleDelete,index,status,handleMoveTo}) => {
  
  const c_status=  status=="Doing"?"To Do":"Doing"
  
 
  return (
    <article className="task_card">
        <p className="task_text">{item.name}</p>
        <div className="task_card_bottom_line">
            <div className="task_card_tags">
                {
                  item.tags.map((tag,key)=>{
                    return <Tag name={tag} key={key} selected/>
                  })
                }
            </div>
            {
              status !=="Done" ? 
              <div className="move_to">
                <div className="move_task" title={"Move to "+c_status} 
                  onClick={()=>{
                    handleMoveTo(index,c_status)
                  }}>
                  <img className="doing_icon" src={c_status == "To Do"?Todo:working} alt="doing icon"/>
                </div>
                <div className="move_task" title="Move to Done" 
                onClick={()=>{
                  handleMoveTo(index,"Done")
                
                }}>
                  <img className="done_icon" src={done} alt="done icon"/>
                </div>  
                <div className="task_delete" title="Delete task" 
                onClick={()=>{
                handleDelete(index)
              
                }}>
                  <img className="delete_icon" src={DeleteIcon}/>
                </div>

              </div>:
              <div className="task_delete" title="Delete task" 
                onClick={()=>{
                handleDelete(index)
                }}>
                <img className="delete_icon" src={DeleteIcon}/>
              </div>
            }
           
        </div>
    </article>
  )
}

export default TaskCard