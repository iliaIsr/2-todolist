import {FilterlValueType} from "./App";
import {useState} from "react";

export type TaskArray = {
    isDone: boolean
    id: string
    title: string
}

type PropsTypeTodoList = {
    title: string
    tasksAr: TaskArray[]
    removeTasks: (id: string) => void
    changeFilter: (value: FilterlValueType)=>void
    addTask: (title: string)=> void
}

export function TodoList(props: PropsTypeTodoList) {
    let [newTaskTitle, setNewTaskTitle]=useState("")
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTaskTitle}
                       onChange={(e)=>{setNewTaskTitle(e.currentTarget.value)
                       }}
                onKeyPress={(e)=>{
                    if (e.charCode===13) {
                        props.addTask(newTaskTitle);
                        setNewTaskTitle("")
                    }
                }}
                    />
                <button onClick={()=> {props.addTask(newTaskTitle);
                setNewTaskTitle("")}}>+</button>
            </div>
            {props.tasksAr.length === 0 ?
                (<p>NO TASKS</p>) : (
                    <ul>

                        {
                            props.tasksAr.map(t =>
                                <li key={t.id}>
                                    <input type={"checkbox"} checked={t.isDone}/>
                                    <span>{t.title}</span>
                                    {/*<button onClick={()=>{props.FanctionRemove()}}>x</button>*/}
                                    <button onClick={() => {
                                        props.removeTasks(t.id)
                                    }}>x
                                    </button>
                                </li>
                            )
                        }
                    </ul>
                )}

            <div>
                <button onClick={()=>{props.changeFilter("All")}}>All</button>
                <button onClick={()=>{props.changeFilter("Active")}}>Active</button>
                <button onClick={()=> {props.changeFilter("Completed")}}>Completed</button>

            </div>
        </div>
    )
}
