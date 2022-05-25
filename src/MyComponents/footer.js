import React from 'react'

export default function footer() {
  let footerStyle={
    // position:"absolute",
    fixed:"bottom",
    top:"100vh",
    width:"100%",
    border:"2px solid red"
  }
  return (
    // <footer className='bg-dark text-light py-3' style={footerStyle}>
    //   <p className="text-center">
    //   Copyright &copy; MyTodolist.com
    //   </p>
      
    //   </footer>
    <div class="container-fluid bg-dark text-light fixed-bottom" id="foot">
      <p class="text-center py-2 mb-1" id="rt">
          Copyright &copy; MyTodolist.com
      </p>
    </div>
  )
}
