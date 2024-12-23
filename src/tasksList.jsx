import { MdDeleteForever } from "react-icons/md";
import { MdDoneOutline } from "react-icons/md";


export const TaskComponent=(props)=>{
    
    return (<div className="main-component">

    {
        <ul>
        { 
            props.activities.map((task)=> (
                <li key={task.id}>
                    {props.pending!==task.completed?
                    <label className="task">
                        <div className="align-left"><input type='radio' name='task'/>

                        <strong className={task.completed?"completed":"not-completed"}>{task.text}</strong>
                        </div>
                        <div className="align-right">
                        <a href="#" ><MdDoneOutline onClick={()=>props.complete(task.id)} className="completed-icon"/></a>

                        <a href="#"><MdDeleteForever onClick={()=>props.delete(task.id)} className="delete-icon"/></a>
                        </div>
                    </label>:<></>
                    }
                    
              
                </li>
            ))
        }
        </ul>
    }

    </div>
    )

}