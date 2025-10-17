const {add,fetch,remove}=require('./controller.js')
// add portfolio
const express=require('express')
const router=express.Router()
router.post('/add',add )
router.get('/fetch',fetch)
router.delete(`/remove/:id`,remove)
module.exports=router;