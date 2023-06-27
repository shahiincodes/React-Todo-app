import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Todos from './Todos';
import {Routes,Route} from 'react-router-dom'

import CreateTodo from './CreateTodo';
import axios from 'axios'
import Home from './Home';
import Register from './Registration';

function App() {
  const [error, setError] = useState(null)
  const [todos, setTodos] = useState([])
  const [updateUI, setUpdateUI] = useState(false)

  useEffect(() => {
    let url = "http://localhost:5000/"
    axios.get(url).then((res) => {
      setTodos(res.data)
    }).catch((err) => {
      setError(err.message)
    })
  }, [todos, updateUI])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/delete/${id}`).then(() => {
      setUpdateUI(true)
    })
      .catch((err) => {
        setError(err.message)
      })
  }

  return (

    <div className="App">
      <Navbar searchbar={true} />
    
     <Routes>
     <Route path='/' element={todos && < Home todos={todos} error={error} handleDelete={handleDelete} />}/>
        <Route path='/home' element={todos.length===0 &&< Home todos={todos} error={error} handleDelete={handleDelete} /> }/>
        <Route path='/all-todos' element={todos.length===0 && < Todos todos={todos} handleDelete={handleDelete} />}/>
        <Route path='/create-todo' element={<CreateTodo />}/>
        <Route path='/register' element={<Register/>} />
      </Routes>
    </div>


  );
}

export default App;
