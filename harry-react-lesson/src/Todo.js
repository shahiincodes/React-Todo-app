import React, { useState } from 'react'
import './main.css'
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import axios from 'axios'

const Todo = ({todo, handleDelete }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [updatedTodo,setUpdatedTodo]=useState({})


  const handleEdit = (todo) => {
    handleShow()
    setUpdatedTodo(todo)
  }
  const handleChange =(e)=>{
    const {name,value}= e.target
    setUpdatedTodo((prev)=>{
      return {
        ...prev,
        [name]:value
      }
    })
  }

  const handleSave = ()=>{
    
    axios.put(`http://localhost:5000/update/${updatedTodo._id}`,updatedTodo).then((res)=>{
      setUpdatedTodo(res.data)
    }).catch((err)=>{
      console.log(err.message)
    })
    handleClose()
    
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Tittle</Form.Label>
              <Form.Control type="text" name='tittle' value={updatedTodo.tittle && updatedTodo.tittle } onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Contents</Form.Label>
              <Form.Control type="text" name='content' value={updatedTodo.content && updatedTodo.content} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleSave(updatedTodo)}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      <div className='todo my-1'>
        <h1>{todo.tittle}</h1>
        <h4>{todo.content}</h4>
        <Button className='btn btn-primary' onClick={() => handleEdit(todo)}>Edit</Button>
        <Button className='btn btn-danger' onClick={() => { handleDelete(todo._id) }}>Delete</Button>
      </div>
    </>
  )
}

export default Todo