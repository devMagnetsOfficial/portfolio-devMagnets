const mongoose=require('mongoose')
const serviceSchema=new mongoose.Schema({
    title:String,
    description:String,
})
const serviceModel=mongoose.model('serviceModel',serviceSchema);
module.exports=serviceModel