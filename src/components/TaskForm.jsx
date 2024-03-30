import Tag from "./Tag"
import "./TaskForm.css"

import { useState } from "react"

const TaskForm = ({setTasks}) => {
    const [taskdata,setTaskdata] = useState({
        "name":'',
        "status":'To Do',
        "tags":[]})

    const selectTag = (tagname) =>{
        
        if(taskdata.tags.some(item => item === tagname)){
            
            const filteredTags = taskdata.tags.filter(item => item !== tagname)
            
            setTaskdata(prev=>{
                return {...prev,tags:filteredTags}
            })

        }
        else{
            
            setTaskdata(prev => {
                return {...prev,tags:[...prev.tags,tagname]}
            })
        }
        

    } 

    const checkTag = (tagname) =>{
       
        return taskdata.tags.some((item)=>item === tagname)
    }
    const handleChange = (e) =>{
        const {name,value} = e.target
        setTaskdata((prevstate) => { 
            return {...prevstate,[name]:value}
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setTasks((prev)=>{
            return [...prev,taskdata]
        })
        setTaskdata(
            {"name":'',
            "status":'To Do',
            "tags":[]}
        )
        
    }
  return (
    <header className="app_header">
        <form onSubmit={handleSubmit}>
            <input type="text" value={taskdata.name} className="task_input" name="name" placeholder="Enter your task..." onChange={handleChange}></input>
            <div className="task_form_bottom_line">
                <div>
                    <Tag name="HTML&CSS" selectTag={selectTag} selected = {checkTag("HTML&CSS")}/>
                    <Tag name="Javascript" selectTag={selectTag} selected = {checkTag("Javascript")}/>
                    <Tag name="React" selectTag={selectTag} selected={checkTag("React")}/>
                    <Tag name="Python&DSA" selectTag = {selectTag} selected={checkTag("Python&DSA")}/>
                    <Tag name="Database" selectTag={selectTag} selected={checkTag('Database')}/>
                    <Tag name="Docker" selectTag={selectTag} selected={checkTag('Docker')}/>
                    <Tag name="kubernetes" selectTag={selectTag} selected={checkTag('kubernetes')}/>
                    <Tag name="AWS" selectTag={selectTag} selected={checkTag('AWS')}/>
                    <Tag name="Nodejs" selectTag={selectTag} selected={checkTag('Nodejs')}/>
                </div>
                
            <div>
                <select name="status" className="task_status" value={taskdata.status}
                    onChange={handleChange}>
                    <option value="To Do">To Do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
                <button type="submit" className="task_submit">+Add Task</button>
            </div>

            </div>
            
        </form>
    </header>
  )
}

export default TaskForm