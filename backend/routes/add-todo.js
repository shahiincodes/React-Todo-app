const express = require ('express')
const { getTodos, createTodos, updateTodos, deleteTodos, register } = require('../controllers/allControllers')
const verifyJwt = require('../controllers/auth')
const router = express.Router()

router.get('/',getTodos)
router.post('/register',register)
router.post('/create-todo',verifyJwt, createTodos)
router.put("/update/:id",verifyJwt,updateTodos)
router.delete("/delete/:id",verifyJwt,deleteTodos)

module.exports = router