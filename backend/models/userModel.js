const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,"Name is Required"],
        minlength:8
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true,
        minlength:6
    },
},{timestamps:true})

module.exports = mongoose.model("User", userSchema)