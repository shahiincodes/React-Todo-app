const mongoose = require("mongoose")
const todoSchema = new mongoose.Schema({
    tittle: {
        type:String,
        required : true
    },
    content:{
        type:String,
        required : true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
   
})
module.exports = mongoose.model("Todo",todoSchema)