import React, { useState } from 'react'
import axios from 'axios'

const CreateTodo = () => {

    const [todo, setTodo]=useState({
        tittle:"",
        content:""
    })
    const [error,setError] = useState(null)
    const handleChange =(e)=>{
        const {name, value}= e.target;
        

        setTodo(prevElm =>{
            return {
                ...prevElm,
                [name]:value
                
            }
        })
    }
    const addTodo = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/create-todo", todo).then((res) => {
            console.log(res.data)
            setTodo({
                tittle:"",
                content:""
            })
        }).catch(err=>setError(err.message))   
    }
    return (
    
        <div className='todo mt-3'>
            <h1 className='text-center'>Creat Todo</h1>
            <form>
            <div className="mb-3">
                <label htmlFor="todo" className="form-label">Todo Tittle : </label>
                <input type="text" className="form-control" name='tittle' value={todo.tittle} onChange={handleChange} placeholder="Type todo tittle" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="todo"  className="form-label">Task Details</label>
                <textarea className="form-control" name='content' value={todo.content} onChange={handleChange} rows="3" required></textarea>
            </div>
            <button className='btn btn-success' type="submit" onClick={addTodo}>Create Todo</button>
            </form>
        </div>
    )
}

export default CreateTodo