const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name : String,
    email : String,
    mobileNo : Number,
    age : Number,

}) 

const User = mongoose.model("User",userSchema)

module.exports = User