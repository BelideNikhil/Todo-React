import React from "react";
let Todo=({todos,setTodos,todo})=>{
    let completeHandler=()=>{
        // map over tods=os and change its status-property-value to opposite of what it was
        setTodos(todos.map(eachTodo=>{
            if(eachTodo.id===todo.id){
                return{
                    ...eachTodo,status:!eachTodo.status
                }
            }
            return eachTodo
        }))
    }
    let deleteHandler=()=>{
        // filtering over todos array and passing the object whose id matches
        setTodos(todos.filter(eachTodo=>eachTodo.id!==todo.id))
    }
    return(
        <div className="todo-container">
            {/* adding and removing class-completed based on click operation */}
            <li className={`todo-item ${todo.status?"completed":""}`}>{todo.task}</li>
            <button className="complete-btn" onClick={completeHandler}><i className="fas fa-check"></i></button>
            <button className="delete-btn" onClick={deleteHandler}><i className="fas fa-trash-alt"></i></button>
        </div>
    )
}

export default Todo