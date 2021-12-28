import React from "react";
import {todoDB} from '../Firebase/config'


export default function Forms({text,setText,setSelectOption,toggleButton,setToggleButton}){
    
    function onInputhandler(e){
        if((e.target.value).length>0){
            setText(e.target.value)
            setToggleButton(false)
        }else{
            setText(e.target.value)
            setToggleButton(true)
        }
    }
    const submitToDoHandler=async(e)=>{
        e.preventDefault()
        let addToDo={task:text,status:false}
        try{
            await todoDB.collection('ToDos').add(addToDo)
        }
        catch(err){
            console.log(err)
        }
        // restetting states
        setText("")
        setToggleButton(true)
    }

    return (
        <div className='dataContainer'>
            <form className='form'>
                <input type="text" onChange={onInputhandler} value={text} required />
                <button onClick={submitToDoHandler} type="submit" className="add-btn" disabled={toggleButton}><i className="fas fa-plus-square"></i></button>
            </form>
            <select onChange={(e)=>setSelectOption(e.target.value)} className="selectOptions">
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
            </select>
        </div>
    )
}
