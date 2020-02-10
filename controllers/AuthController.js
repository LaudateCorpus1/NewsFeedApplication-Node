var authService = require('../Services/AuthService');
var express= require ('express');
var session = require('express-session');
var app = express();
// Global variable to store session details
var session_data; 
app.use(session({
    secret: 'Token',
    resave: false,
    saveUninitialized: true
}));

exports.register = function(req, res){
    let register = authService.Register(req.body, function(err, result){
    if(err)
        res.send(err);
    res.send(result);
  })
}

exports.login = function(req, res){
    let login = authService.Login(req.body, function(err, result){
        session_data = req.session;
        if(err){
            res.send(err)
        }else{
            session_data.token = result;
            res.send(result);
        }
    })
 }

 exports.validate_token = function(req, res){
    let validate = authService.Validate(req.body.token,function(err, result){
        if(err)
            res.send(err.message);
        res.send(result);
    })
}

exports.Validate_OTP = function(req,res){
    let validateOTP = authService.ValidateOTP(req.body,function(err, result){
        if(err)
            res.send(err.message);
        res.send(result);
    })
}