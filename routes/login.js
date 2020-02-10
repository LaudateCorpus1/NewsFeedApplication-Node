const express = require('express');
const router = express.Router();
const Person = require('../models/person');

router.get('/',(req,res,next)=>{
    Person.find({firstName : req.query.name, password : req.query.password},function(err,result){
         if(err){
             res.json(err);
         }else{
             res.json(result);
         }
    })
});