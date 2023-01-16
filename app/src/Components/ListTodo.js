
import React from 'react'
import Task from './Task'
import {useSelector} from 'react-redux'
function ListTodo() {
    const todos = useSelector(state=>state.todos)
    console.log('todos',todos)
  return (
    <div className='list-todo'>
        <ul>
            {todos.map((el)=>(<Task todo = {el}/>))}
        </ul>
     
    </div>
  )
}
export default ListTodo
