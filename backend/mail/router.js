const {contact,donate,mentorship}=require('./controller')
const express=require('express')
const mailRouter=express.Router()
mailRouter.post('/contact',contact)
mailRouter.post('/donate',donate)
mailRouter.post('/mentorship',mentorship)
module.exports=mailRouter
