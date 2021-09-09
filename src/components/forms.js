import React from "react";

let Forms=({text,setText,todos,setTodos,setSelectOption,toggleButton,setToggleButton})=>{
    // to enable diable button
    function onInputhandler(e){
        if((e.target.value).length>0){
            setText(e.target.value)
            setToggleButton(false)
        }else{
            setText(e.target.value)
            setToggleButton(true)
        }
    }
    function submitToDoHandler(e){
        e.preventDefault()
        setTodos([...todos,{task:text,id:Math.random()*100,status:false}])
        // restetting states
        setText("")
        setToggleButton(true)
    }
    function options(e){
        setSelectOption(e.target.value)
    }

    return (
        <div className='dataContainer'>
            <form className='form'>
                <input type="text" onChange={onInputhandler} value={text} required />
                <button onClick={submitToDoHandler} type="submit" className="add-btn" disabled={toggleButton}><i className="fas fa-plus-square"></i></button>
            </form>
            <select onChange={options} className="selectOptions">
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
            </select>
        </div>
    )
}

export default Forms
