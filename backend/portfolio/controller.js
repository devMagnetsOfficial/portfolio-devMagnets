const portfolioModels=require('./model.js')
const add=async(req, res) => {
    const {title,description,category,link,img}=req.body
    console.log(req.body)
    try {
       await portfolioModels.create({
           title,description,category,link,img
        })
        res.json({success:true})
    }
    catch (err) {
        res.json({err,success:false})
    }
}
const fetch=async(req,res)=>{
    try{
        const projects=await portfolioModels.find()
        res.json({success:true,projects})
    }
    catch(err){
        res.json({err,success:false})
    }
}
const remove=async(req,res)=>{
    const id=req.params.id
    try{
        await portfolioModels.Find({_id:id})
        res.json({success:true})

    }catch(err){
        res.json({err,success:false})
    }

}
module.exports={add,fetch,remove}