import React from 'react'
import Todo from './Todo'

const TodoList = ({todos,setTodos,filteredTodos}) => {
  return (
    <div className='todo-container'>
        <ul className="todo-list">
            {filteredTodos.map(value=>{
                return(
                    <Todo 
                    todos={todos}
                    value={value}
                    key={value.id}
                    text={value.text}
                    setTodos={setTodos}/>
                )
            })}
        </ul>
    </div>
  )
}

export default TodoList
