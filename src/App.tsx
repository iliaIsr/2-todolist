import './App.css';
import React, {useState} from "react";
import {TaskArray, TodoList} from "./Todolist";

export type FiltelValueType = "All" | "Completed" | "Active";

function App() {

    //Data
    let [tasks, setTasks] = useState<Array<TaskArray>>([
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "JS", isDone: false},
        {id: 3, title: "JAVA", isDone: true},
        {id: 4, title: "TypeScript", isDone: true},
    ])
    let [filter, setFilter] = useState<FiltelValueType>("All")

    //change logic
    function changeFilter(value: FiltelValueType) {
        setFilter(value)
    }

    let tasksForTodolist = tasks
    if (filter === "Completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true)
    }
    if (filter === "Active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false)
    }


    function removeTasks(id: number) { //не вызывается при первом запуске? только после клика?
        debugger
        let filteredTasks = tasks.filter(t => t.id !== id) //после клика,создай новый масив и положи
        setTasks(filteredTasks) //в параметры функции setTasks/ мы не указывали какие параметры
        //принимает функция setTasks?!
        console.log(setTasks);
    }

    //UI
    return (
        <div className="App">
            <TodoList title={"My tasks"} changeFilter={changeFilter} tasksAr={tasksForTodolist} removeTasks={removeTasks}/>
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