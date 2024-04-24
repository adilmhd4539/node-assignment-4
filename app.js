const express = require('express');
const path =require('path');
const bodyParser =require('body-parser');
const addUserData=require('./routes/add-user');
const userRouter=require('./routes/user');
const app= express();
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');
app.set('views','views');
app.use(addUserData.router);
app.use(userRouter);
app.use(express.static(path.join(__dirname,'public')));
app.use((req,res,next)=>{
res.status(404).render('404',{pageTitle:'Page Not Found',path:'404'});
});
app.listen(3000);