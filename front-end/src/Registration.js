import axios from 'axios'
import React, { useState } from 'react'

const Registration = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setUser(prevUser => {
      return {
        ...prevUser,
        [name]: value
      }
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/register',user)
    .then((res)=>{
      console.log(res.data)
      
    })
    .catch((err)=>{console.log(err.message)})
  }

  return (
    <div className='registration'>
      <form method='post'>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">Name:</label>
          <input type="text" value={user.name} name='name' onChange={handleChange} className="form-control" placeholder="Enter Your Name"/>
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">Email:</label>
          <input value={user.email} name='email' onChange={handleChange} type="email" className="form-control" placeholder="Enter Email"/>
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">Set Password:</label>
          <input value={user.password} name='password' onChange={handleChange} type="password" className="form-control" placeholder="set Password"/>
        </div>
        <button type="submit" className='btn btn-success' onClick={handleSubmit}>Submit</button>
      </form>
      
    </div>
  )
}

export default Registration