const {add,fetch,remove,modify,fetchOne}=require('./controller.js')
// add portfolio
const express=require('express')
const router=express.Router()
router.post('/add',add )
router.get('/fetch',fetch)
router.post('/fetchOne',fetchOne)
router.delete(`/remove/:id`,remove)
router.patch('/modify',modify)
module.exports=router;