const express = require('express');
const router = express.Router();
const Person = require('../models/person');

router.get('/persons',(req,res,next)=>{
    Person.find(function(err, person){
     res.json(person);
  })
});
router.post('/person',(req,res,next)=>{
    let newPerson  = new Person ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mobileNumber: req.body.mobileNumber,
        emailId:req.body.emailId,
        password:req.body.password
    });
    newPerson.save((err,person)=>{
       if(err){
           res.json({msg : "Error while saving data!"});
       }else{
           res.json({msg: "Person Details sucessfully saved!!"+ person});
       }
    })
});
router.delete('/person/:id',(req,res,next)=>{
    Person.remove({_id : req.params.id},function(err,result){
         if(err){
             res.json(err);
         }else{
             res.json(result);
         }
    })
});

router.get('/login',(req,res,next)=>{
    Person.find({firstName : req.query.name, password : req.query.password},function(err,result){
         if(err){
            res.json(err);
         }else{
             console.log(result);
             if(result.length > 0){
                res.json(
                    { isError: false ,
                      message : "Logged In Successfully"});
              }else {
                res.json( 
                    {   isError : true,
                        message : "Please enter valid Credentials"
                    });
             }
         }
    });
});

// Amazon Cognito Code to allow user to sign In and sign up

var authController = require('../controllers/AuthController');
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);
router.post('/auth/validate', authController.validate_token);
router.post('/auth/validateOtp',authController.Validate_OTP);

// AWS S3 Image storage

var addArticleController = require('../controllers/AddArticleController');
router.post('/uploadImage',addArticleController.UploadImage);

// News API usage to display News 

var newsController = require('../controllers/DisplayNewsController');
router.get('/news/headLines', newsController.displayHeadlines);
router.get('/news/getAllDetails', newsController.getAllDetails);
module.exports = router;