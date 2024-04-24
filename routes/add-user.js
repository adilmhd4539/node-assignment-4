const express= require('express');
const router=express.Router();
const users=[];
router.get('/',(req,res,next)=>{
    res.render('add-user',{path:'/',pageTitle:'Register User'});
});
router.post('/',(req,res,next)=>{
    users.push({name:req.body.name});
    res.redirect('/users');
});
exports.router=router;
exports.users=users;