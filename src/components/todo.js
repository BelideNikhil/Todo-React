import React,{useState} from "react";
import {todoDB} from '../Firebase/config'


export default function Todo ({todos,todo}){
    const [edit,setEdit]=useState(false)
    const [newData,setNewData]=useState(todo.task)

    const completeHandler=async(id)=>{
        try{
            await todoDB.collection('ToDos').doc(id).set({...todo,status:!todo.status})
        }catch(err){
            console.log(err)
        }
    }

    const deleteHandler=async(id)=>{
        try{
            await todoDB.collection('ToDos').doc(id).delete()
        }catch(err){
            console.log(err)
        }
    }

    const editHandler=async(id)=>{
        setEdit(prev=>!prev)
        try{
            await todoDB.collection('ToDos').doc(id).set({...todo,task:newData})
        }catch(err){
            console.log(err)
        }  
    }
    const each_to_do=(
        <div className="todo-container">
            {edit?<input type="text" value={newData} onChange={(e)=>setNewData(e.target.value)} className="edit-input"></input>:<li className={`todo-item ${todo.status?"completed":""}`}>{todo.task}</li>}
            <button className="edit-btn" onClick={()=>editHandler(todo.id)}>{edit?<i className="fas fa-save"></i>:<i className="fas fa-edit"></i>}</button>
            <button className="complete-btn" onClick={()=>completeHandler(todo.id)} disabled={edit}><i className="fas fa-check"></i></button>
            <button className="delete-btn" onClick={()=>deleteHandler(todo.id)} disabled={edit}><i className="fas fa-trash-alt"></i></button>
        </div>
    )
    return each_to_do
}

