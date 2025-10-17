const portfolioModels=require('./model.js')
const add=async(req, res) => {
    try {
       await portfolioModels.create({
            title: 'String',
            description: 'String',
            category: 'String',
            link: 'String',
            img: 'String'
        })
        res.send('added')
    }
    catch (err) {
        res.send('err (whiling adding your project to db): '+err)
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
        await portfolioModels.deleteOne({_id:id})
        res.json({success:true})

    }catch(err){
        res.json({err,success:false})
    }

}
module.exports={add,fetch,remove}