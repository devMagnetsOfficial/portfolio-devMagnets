const {add,modify,remove,fetch,fetchOne}=require('./controller')
const express=require('express')
const router=express.Router()
router.get('/fetch',fetch)
router.post('/fetchOne',fetchOne)
router.post('/add',add)
router.patch('/modify',modify)
router.delete('/remove/:id',remove)
module.exports=router