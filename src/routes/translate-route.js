const express=require('express')
const {translateData}=require('../controllers/translate-controller')
const router=express.Router()
router.use(express.json())


router.post('/',translateData)

module.exports=router