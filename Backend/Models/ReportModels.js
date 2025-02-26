
      const mongoose=require('mongoose')
      const ReportSchema=mongoose.Schema({
        image:String,
        location:String,
        category:String,
        description:String
  
          
          // username:String,
          // email:{type:String,unique:true},
          // password:String,isVerified:{type:Boolean,default:false}
      },{timestamps:true})
      const ReportModel=new mongoose.model("ReportData",ReportSchema)
      module.exports=ReportModel
      