const express=require('express');
const router=express.Router();
 
const{
    Mail
}=require('../controllers/mail');

router.post('/send',Mail);
module.exports=router;