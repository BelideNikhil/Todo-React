import React,{useState,useEffect} from "react";
import Todo from './todo'
import {todoDB} from '../Firebase/config'

export default function ToDoList({todos,setTodos,filteredTodos}){
    //initial render
    const [isPending,setIsPending]=useState(true)
    useEffect(()=>{
        const cancelFn=todoDB.collection('ToDos').onSnapshot((snapshot=>{
          if(!snapshot.empty){
            let dbTodos=[]
            snapshot.docs.forEach(item=>dbTodos.push({id:item.id,...item.data()}))
            setTodos(dbTodos)
            setIsPending(true)
          }else{
            setIsPending(false)
          }
        }),(err=>console.log(err)))
    
        return ()=>cancelFn()
    },[setTodos])

    return(
        <>
            {isPending?<ul>
                {filteredTodos.map(eachToDo=>{
                    return (
                        <Todo todo={eachToDo} id={eachToDo.id} key={eachToDo.id} todos={todos} setTodos={setTodos}/>
                    )
                })} 
            </ul>:<h4 className="zero-tasks">"No Pending Tasks! Add one to get started."</h4>}
        </>
    )
}