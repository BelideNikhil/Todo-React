import React, { useEffect,useState} from 'react';
import Header from './components/header';
import Forms from './components/forms';
import ToDoList from './components/ToDoList';
import Footer from './components/footer';


export default function App() {
  let [text,setText]=useState("")
  let [todos,setTodos]=useState([])
  let [selectOption,setSelectOption]=useState("All")
  let [filteredTodos,setFilteredTodos]=useState([])
  let [toggleButton,setToggleButton]=useState(true)

  useEffect(()=>{
    if(selectOption==="Completed"){
      setFilteredTodos(todos.filter(eachTodo=>eachTodo.status===true))
    }else if(selectOption==="Pending"){
      setFilteredTodos(todos.filter(eachTodo=>eachTodo.status===false))
    }else{
      setFilteredTodos(todos)
    }
  },[selectOption,todos]);

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

