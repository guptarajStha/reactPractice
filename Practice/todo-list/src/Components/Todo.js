import React from 'react'
import {FaCheck,FaTrash} from "react-icons/fa"

const Todo = ({text,value,todos,setTodos}) => {
    function handleTrash(){
       setTodos(todos.filter(element=>element.id!==value.id))
    }
    function handleCheck(){
        setTodos(todos.map(item=>{
            if(item.id===value.id){
                return{
                    ...item,
                    completed:!item.completed
                }
            }
            return item;
            
        }))
    }
  return (
    <div className='todo'>
      <li className={`todo-item ${value.completed?"completed":""}`} >{text}</li>
      <button className='complete-btn' onClick={handleCheck}><FaCheck /></button>
      <button className='trash-btn' onClick={handleTrash}><FaTrash /></button>

    </div>
  )
}

export default Todo
