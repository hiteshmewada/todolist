import React from 'react'
import {Todoitem} from './Todoitem';
// props are the entities which is of parent and can be used by child using props;
export const Todos=(props)=>{
  let myStyle={
    minHeight:"70vh",
    margin:"50px auto"
  }
  return(
  
      <div className='container my-2' style={myStyle}>
      <h3 className='my-2'>Todos List</h3>
      {props.todos.length==0?"No todos to display":props.todos.map((todo)=>{
       
        return (<Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/>)
        
      })}
      
      
    </div>
    
  )
}
