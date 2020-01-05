const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
//const taskRouter = require('./routes/tasks');
//const categoryRouter = require('./routes/category');
//const userRouter = require('./routes/users');
const dotenv = require('dotenv').config();
//const uploadRouter = require('./routes/upload');
//const auth = require('./auth');
const cors = require('cors');


const app=express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/users');

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.statusCode=500;
    res.json({status: err.message});

});

app.listen(process.env.PORT,()=>{
    console.log(`Listening at:${process.env.PORT}`);


});



