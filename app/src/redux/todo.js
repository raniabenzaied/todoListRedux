import {createSlice} from '@reduxjs/toolkit'
import {v4 as uuidv4} from 'uuid'
const todoSlice = createSlice ({
    name :'todos' ,
    initialState :[  
        {text : 'Read a book ' , id : uuidv4() , isDone : false},
        {text : 'Morning Walk ' , id : uuidv4() , isDone : false},
        {text : 'Finish the assignment ' , id : uuidv4() , isDone : false},
],
reducers :{
    //add
    add:(state,action) =>{
        const newTodo ={
            id:uuidv4(),
            text:action.payload,
            isDone:false,
        }
        state.push(newTodo)
    },
    //delete
    del :(state,action) =>{
        return state.filter((el)=> el.id !== action.payload)
    },

    //toggle button
    toggletodo :(state,action) =>{
        return state.map((el) =>{
            if (el.id === action.payload)
            return {...el , isDone : !el.isDone}
            else {return el }
        })
    },

    //edit
    edittodo :(state,action) =>{
        const index = state.findIndex((el)=> el.id ===action.payload)
             state[index].text = prompt ('please update your todo');
    }
}


})

export const {edittodo,toggletodo,add,del} = todoSlice.actions;
export default todoSlice.reducer
