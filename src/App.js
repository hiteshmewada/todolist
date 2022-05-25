import './App.css';
import Header  from './MyComponents/header';
import {AddTodo } from './MyComponents/AddTodo';
import Footer from './MyComponents/footer'
import {About} from './MyComponents/About'
import {Todos} from './MyComponents/Todos'
import React,{ useState,useEffect } from 'react';

// if you want to use Switch then install react-router-dom version 5. Switch is replaced in react-router-dom version 6.

// npm install react-router-dom@5
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// React router is a tool through which we can open anything in our website without loading
// when we pass todos in localstorage then some remains while some doesn't due to location of placing items in localStorage . This problem can be solved using USE-EFFECT HOOK.
function App() {
  // if(localStorage.set)
  let initTodo;
    if(localStorage.getItem("todos")===null)
      {
        initTodo=[];
      }
      else{
        initTodo=JSON.parse(localStorage.getItem("todos"));
      }
  const onDelete=(todo)=>{
    console.log("I am deleted todo",todo);
    // Deleting in this way in react does not work
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);
      setTodos(todos.filter((e)=>{
        return e!==todo;
        localStorage.setItem("todos",JSON.stringify(todos));
      }));
  }
  const addTodo=(title,desc)=>{
    console.log("I am adding this ",title,desc)
    let sno;
    if(todos.length===0) sno=0;
    else sno=todos[todos.length-1].sno+1;
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);
    
    console.log(myTodo);
  }
  // hook -> They let you use state and other React features without writing a class. Hooks are backwards-compatible
  // const [todos,setTodos]=useState([
  //   {
  //     sno:1,
  //     title: "Go to market",
  //     desc: "You need to do this"
  //   },
  //   {
  //     sno:2,
  //     title: "Go to mall",
  //     desc: "You need to do this"
  //   },
  //   {
  //     sno:3,
  //     title: "Go to ghat",
  //     desc: "You need to do this"
  //   },
  // ]);
  const [todos,setTodos]=useState(initTodo);
    useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos));
    },[todos]);
  return (
    <> 
    <Router>
      <Header title="My Todos List" searchBar={false} /> 
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" render={()=>{
            return (
              <>
                <AddTodo addTodo={addTodo}/>
                <Todos todos={todos} onDelete={onDelete} /> 
              </>
            )
          }}>
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      {/* <Routes> */}
          {/* <Route exact path="/" element={()=>{
            return(
            <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} /> 
            </>)
          }}/>  */}
          {/* </Route> */}
          {/* <Route exact path="/About" element={<About/>}/> */}
           
          {/* </Route>  */}
        {/* </Routes>  */}
      <Footer />
    </Router>
    </>
    // <>
    // <Header title="My Todos List" searchBar={false}/>
    // <AddTodo addTodo={addTodo}/>
    // <Todos todos={todos} onDelete={onDelete}/>
    // <br />
    // <br />
    // <br />
    // <Footer/>
    // </>
  );
}

export default App;
