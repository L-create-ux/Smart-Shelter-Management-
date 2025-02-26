const mongoose=require('mongoose')
const orpSchema=mongoose.Schema({
    name:String,
    address:String,
    categories:String,
    image:String

    
    // username:String,
    // email:{type:String,unique:true},
    // password:String,isVerified:{type:Boolean,default:false}
},{timestamps:true})
const orpModel=new mongoose.model("Orphanage",orpSchema)
module.exports=orpModel
