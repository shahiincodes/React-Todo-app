import React from 'react'
import CreateTodo from './CreateTodo'
import Todos from './Todos'

const Home = ({todos,handleDelete}) => {
  return (
       <>
        <CreateTodo/>
        <br />
        < Todos todos={todos} handleDelete={handleDelete} />
        
      </>  
    
  )
}

export default Home