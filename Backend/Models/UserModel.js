// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   number: String,
//   address: String,
//   password: String, // Will be hashed before saving
//   availability: String,
//   image: String, // File path for uploaded image
// });

// const User = mongoose.model("User", userSchema);
// module.exports = User;
const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
       username:String,
       email:String,
       password:String,
       
    
    // username:String,
    // email:{type:String,unique:true},
    // password:String,isVerified:{type:Boolean,default:false}
},{timestamps:true})
const UserModel=new mongoose.model("Report",userSchema)
module.exports=UserModel
