import React from 'react'
// import {Todo} from './Todos'
export const Todoitem=({todo,onDelete})=>{
  return(
  
      <div>
        <h4 className=' my-3'>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className="btn btn-sm btn-danger " onClick={()=>{onDelete(todo)}}>Delete</button>
        <hr />
        {/* <p>Hitesh</p> */}
        {/* // to avoid rendering of function we will pass function with a call and we won't call function directly */}
      </div>
    
  )
}

