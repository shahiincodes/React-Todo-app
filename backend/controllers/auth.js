const jwt = require ("jsonwebtoken")

const verifyJwt = (req,res,next)=>{
const token = req.cookies.todoToken
try {
    if(token){
        jwt.verify(token,process.env.TodoJwtkey,(err, data)=>{
            req.id = data._id;
            req.name = data.name;
            next()
        })
    }else{
        res.send("Token Not available")
    }
} catch (error) {
    res.send(error.message)
}  

}

module.exports = verifyJwt