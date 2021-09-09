import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from './components/header';
import Forms from './components/forms';
import ToDoList from './components/ToDoList';
import Footer from './components/footer';


function App() {
  // states
  let [text,setText]=useState("")
  let [todos,setTodos]=useState([])
  let [selectOption,setSelectOption]=useState("All")
  let [filteredTodos,setFilteredTodos]=useState([])
  let [toggleButton,setToggleButton]=useState(true)

  // run once and fetch local data
  useEffect(()=>{
    getLocalTodos()
  },[])

  // run whenever there is a render
  useEffect(()=>{
    filterTodos()
    saveLocalTodos()
  },[selectOption,todos]);

  // functions
  let filterTodos=()=>{
      if(selectOption==="Completed"){
        setFilteredTodos(todos.filter(eachTodo=>eachTodo.status===true))
      }else if(selectOption==="Pending"){
        setFilteredTodos(todos.filter(eachTodo=>eachTodo.status===false))
      }else{
        setFilteredTodos(todos)
      }
  }

  const saveLocalTodos=()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  };
  const getLocalTodos=()=>{
    if(localStorage.getItem("todos")===null){
      localStorage.setItem("todos",JSON.stringify([]))
    }else{
      let todoLocal=JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal)
    }
  }

  return (
    <div className="App">
      <div className="container">
        <Header/>
        <Forms text={text} setText={setText} todos={todos} setTodos={setTodos} setSelectOption={setSelectOption} toggleButton={toggleButton} setToggleButton={setToggleButton}/>
        <ToDoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
        <Footer/>
      </div>
    </div>
  );

}


export default App;