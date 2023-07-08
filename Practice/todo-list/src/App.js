import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';
import React,{useState,useEffect} from 'react'

function App() {
  const [todoInput, setTodoInput] = useState("")
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([])
useEffect(()=>{
  getLocalTodos()
},[])

  useEffect(()=>{
   filterHandler() 
   saveLocalTodos()
  },[todos,status])
  const filterHandler=()=>{
      switch(status){
        case "completed": 
              setFilteredTodos(todos.filter(todo=>todo.completed===true))
              break;
        case "uncompleted":
              setFilteredTodos(todos.filter(todo=>todo.completed===false))
              break;
        default:
              setFilteredTodos(todos)
              break;
      }
  }
  const saveLocalTodos =()=>{
      localStorage.setItem('todos', JSON.stringify(todos))
  }
  const getLocalTodos=()=>{
    if(localStorage.getItem('todos')===null){
       localStorage.setItem('todos', JSON.stringify([]))
    }
    else{
     let storeData=JSON.parse(localStorage.getItem("todos"));
  
       setTodos(storeData)
    }

  }
  return (
    <div className="App">
      <header>
        <h1>Guptaraj's Todo List</h1>
      </header>
      <Form filteredTodos={filteredTodos} status={status} setStatus={setStatus} todoInput={todoInput} setTodoInput={setTodoInput} todos={todos} setTodos={setTodos}/>
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
