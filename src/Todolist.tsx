import {FiltelValueType} from "./App";

export type TaskArray = {
    isDone: boolean
    id: number
    title: string
}

type PropsTypeTodoList = {
    title: string
    tasksAr: TaskArray[]
    removeTasks: (id: number) => void
    changeFilter: (value: FiltelValueType)=>void
}

export function TodoList(props: PropsTypeTodoList) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            {props.tasksAr.length === 0 ?
                (<p>NO TASKS</p>) : (
                    <ul>

                        {
                            props.tasksAr.map(t =>
                                <li>
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
