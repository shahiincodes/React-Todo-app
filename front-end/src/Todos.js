import React from 'react'
import Todo from './Todo'
import './main.css'


const Todos = ({todos,handleDelete}) => {

  return (
    <>
    <div className='all-todods'>
        <h1 className='bg-primary todo' >All Todos List</h1>
        <div className='text-center'>
        {todos.length===0 ? <h2 className='mt-1'>No item in the list</h2>  : todos.map((todo)=>{
           return < Todo todo = {todo} key={todo._id}  handleDelete={handleDelete}/>    
        })}
        </div>
    </div>
    </>
  )
}

export default Todos