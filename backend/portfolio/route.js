const {add,fetch,remove}=require('./controller.js')
// add portfolio
const express=require('express')
const router=express.Router()
router.get('/add',add )
router.get('/fetch',fetch)
router.get('/remove',remove)
module.exports=router;