const express = require ('express')
const mongoose = require ('mongoose')
const app = express()
const env = require("dotenv")
const bodyparser = require("body-parser")
const router = require ('./routes/add-todo')
const cors =require ('cors')
env.config()

app.use(express.json())
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended:true
}))

//database connection
mongoose.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true,useUnifiedTopology: true});
let db = mongoose.connection;
db.on("error", (err) => console.log("error connecting database"));
db.once("open", () => console.log("connected to the Todo-app Database"));

app.use(router)
app.listen(process.env.PORT , ()=>{
    console.log(`Server running at ${process.env.PORT}`)
})