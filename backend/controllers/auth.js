const jwt = require ("jsonwebtoken")

const verifyJwt = async (req,res,next)=>{
const recievedtoken = req.cookies.token
console.log("recieved token:" + recievedtoken)
try {
    if(recievedtoken){
        jwt.verify(recievedtoken,process.env.jwt_key,async(err, data)=>{
            req.userId = data;
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