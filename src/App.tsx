import './App.css';
import React, {useState} from "react";
import {TaskArray, TodoList} from "./Todolist";
import {v1} from "uuid";

export type FilterlValueType = "All" | "Completed" | "Active";

function App() {

    //Data
    let [tasks, setTasks] = useState<Array<TaskArray>>([
        {id: v1(), title: "HTML", isDone: true},
        {id: v1(), title: "JS", isDone: false},
        {id: v1(), title: "JAVA", isDone: true},
        {id: v1(), title: "TypeScript", isDone: true},
    ])

    function removeTasks(id: string) { //не вызывается при первом запуске? только после клика?
        debugger
        let filteredTasks = tasks.filter(t => t.id !== id) //после клика,создай новый масив и положи
        setTasks(filteredTasks) //в параметры функции setTasks/ мы не указывали какие параметры
        //принимает функция setTasks?!
        console.log(setTasks);
    }
    function addTask(title: string) {
        let newTask = {id: v1(), title: title, isDone: false}
        let NewTasks = [newTask, ...tasks]
        setTasks(NewTasks)
    }

    function changeFilter(value: FilterlValueType) {
        setFilter(value)
    }
    let [filter, setFilter] = useState<FilterlValueType>("All")

    //change logic




    let tasksForTodolist = tasks
    if (filter === "Completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true)
    }
    if (filter === "Active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false)
    }


    //UI
    return (
        <div className="App">
            <TodoList title={"My tasks"} changeFilter={changeFilter} tasksAr={tasksForTodolist}
                      removeTasks={removeTasks}
                      addTask={addTask}/>
            {/*как компанента принимает этот пропс после перериовки (*/}
            {/*удаления таски)tasksAr={tasks}*/}


        </div>
    );
}

export default App;
//  function RemoveTasks (id:number){ //как он знает какое id сюда попадает?
// 	debugger
// 	let resultTasks=tasks.filter((t)=>{
// 		if (t.id !== id){
// 			return true;
// 	}else{ return false;
// 		}
// 	})
// 	 console.log(resultTasks)
// }