import React ,{useState} from 'react'
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch} from 'react-redux';
import {add} from '../redux/todo'
function AddTodo()  {
    const Dispatch = useDispatch ()
    const [input,setInput] = useState('')
    const handleAdd =() =>{
        Dispatch(add(input))
    }

    return (
    <div>
    <div className='btn-container'>
        <input placeholder='enter a new todo' onChange={(el)=>setInput(el.target.value)}/>
        <button  onClick={handleAdd}> add a new todo</button>

    </div>
    </div>
    )
}
export default AddTodo
