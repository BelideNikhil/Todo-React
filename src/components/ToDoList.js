import React from "react";
import Todo from './todo'

let ToDoList=({todos,setTodos,filteredTodos})=>{
    // todos is all the objects
    // we all lopping over array of objs and passing each obj to todo component which returns the task
    return(
        <div>
            <ul>
                {filteredTodos.map(eachToDo=>{
                    return (
                        <Todo todo={eachToDo} id={eachToDo.id} key={eachToDo.id} todos={todos} setTodos={setTodos}/>
                    )
                })} 
            </ul>
        </div>
    )
}

export default ToDoList