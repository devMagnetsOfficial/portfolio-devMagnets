const {contact,donate,mentorship,fetch,remove}=require('./controller')
const express=require('express')
const mailRouter=express.Router()
mailRouter.post('/contact',contact)
mailRouter.post('/donate',donate)
mailRouter.post('/fetch',fetch)
mailRouter.delete('/remove/:id/:filter',remove)
mailRouter.post('/mentorship',mentorship)
module.exports=mailRouter
