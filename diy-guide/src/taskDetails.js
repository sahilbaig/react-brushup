import React from "react"
import shortid from 'shortid';
const TaskList = ({tasks}) =>{
    return(
        <div>
            <ul>
                {tasks.map((i)=>{
                    return <li key={shortid.generate()}> {i.name}</li>
                })}
            </ul>
        </div>
    )
}

export default TaskList;