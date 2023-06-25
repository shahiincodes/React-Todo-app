const express = require ('express')
const { getTodos, createTodos, updateTodos, deleteTodos, register } = require('../controllers/allControllers')
const router = express.Router()


router.get('/',getTodos)
router.post('/register',register)
router.post('/create-todo',createTodos)
router.put("/update/:id",updateTodos)
router.delete("/delete/:id",deleteTodos)

module.exports = router