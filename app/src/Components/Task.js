import React from 'react'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import{useDispatch} from 'react-redux' ;
import {del,toggletodo,edittodo} from '../redux/todo'

function Task({todo}) {
    console.log ('todo',todo)
    const Dispatch = useDispatch()
    const handletoggle = (id) =>{
        Dispatch(toggletodo(id))
    }
    const handledel = (id) =>{
        Dispatch(del(id))
    }
    const handleedit = (id) =>{
        Dispatch(edittodo(id))
    }
  return (
    <div className='task-container'>
      <div className='task'>
          {todo.text}
          <input type = 'checkbox' onClick={()=>handletoggle(todo.id)} checked = {todo.isDone}/>
      </div>
      <div className='dd'>
    <button onClick={()=>handleedit(todo.id)} >edit</button>
    <button  onClick={()=>handledel(todo.id)}>delete</button>
    </div>
    </div>

   
  )
}
export default Task