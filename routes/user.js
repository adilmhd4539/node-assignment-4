const express =require('express');
const addUserData=require('./add-user');
const router =express.Router();

router.get('/users',(req,res,next)=>{
    res.render('users',{pageTitle:'Users',path:'/users',users:addUserData.users});
});
module.exports=router;