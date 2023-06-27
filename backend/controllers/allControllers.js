const todoModel = require("../models/todoModel")
const userModel = require("../models/userModel")
const jwt = require ("jsonwebtoken")


const getTodos = async (req, res) => {
    try {
        const todos = await todoModel.find({})
        if (todos.length !== 0) {
            res.send(todos)
        } else {
            res.send("No todos found")
        }

    } catch (error) {
        res.send(error)
    }
}
const register = async (req,res)=>{
    try {
        const user = new userModel({
            name : req.body.name,
            email:req.body.email,
            password:req.body.password
        })
        await user.save().then((data)=>{
            jwt.sign(user,process.env.TodoJwtkey,(token)=>{
                res.cookie("todoToken",token,{httpOnly:true})
            })
            res.json(data)
        })
        
    } catch (error) {
        res.send(error)
    }

}
const createTodos = async (req, res) => {
    const tittle= req.body;
    const content = req.body.content;
    const user = req.id
    try {
        const newTodo = new todoModel({
            user,
            tittle,
            content
        })
        await newTodo.save().then((data)=>{
            res.json(data)
        })
    } catch (error) {
        res.send(error.message)
    }
}
const updateTodos = async (req, res) => {
    
    try {
        await todoModel.findByIdAndUpdate({ _id: req.params.id }, {tittle: req.body.tittle,
            content: req.body.content},{new:true})
            .then((data) => {
                res.send(data)
            })
    } catch (error) {
        res.send(error)
    }
}
const deleteTodos = async (req, res) => {

    try {
        await todoModel.findByIdAndDelete({ _id: req.params.id })
            .then(() => {
                res.send("Deleted successfully")
            })
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    getTodos,
    createTodos,
    updateTodos,
    deleteTodos,
    register
}