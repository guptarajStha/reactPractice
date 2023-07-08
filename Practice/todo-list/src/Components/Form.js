import React from 'react'
import {FaPlusSquare} from 'react-icons/fa'

const Form = (props) => {
    
    function handleChange(event){
        props.setTodoInput(event.target.value)
    }
    function handleSubmit(event){
        event.preventDefault();
        props.setTodos([...props.todos,
            {text:props.todoInput, completed:false,id:Math.random()*1000}
        ])
        props.setTodoInput("")
    }
    const statusHandler=(event)=>{
      props.setStatus(event.target.value)
    }
  return (
    <div>
      <form >
        <input
         type="text"
          className="todo-input" 
          onChange={handleChange}
           value={props.todoInput} />
        <button  onClick={handleSubmit} className="todo-button" type='submit'>
                <FaPlusSquare />
        </button>
        <div className="select">
            <select name="todos" id="" className="filter-todo" onChange={statusHandler}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
      </form>
    </div>
  )
}

export default Form
