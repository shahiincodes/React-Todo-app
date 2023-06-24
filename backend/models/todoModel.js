const mongoose = require("mongoose")
const todoSchema = new mongoose.Schema({
    tittle: {
        type:String,
        required : true
    },
    content:{
        type:String,
        required : true
    }
})

module.exports = mongoose.model("Todo",todoSchema)