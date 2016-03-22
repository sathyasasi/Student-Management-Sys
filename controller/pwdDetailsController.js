//modules
var mongoose = require('mongoose');
var path = require('path');
var cloudinary = require('cloudinary');
var bodyParser = require('body-parser');

//models
var Staff = require('../models/staff.js');
var Student = require('../models/student.js');


//Forgot password
exports.forgotPassword = function(req, res, next){
var email = req.params.email;
console.log(email);
Staff.findOne({'email':email}, function(err, user){
  if(err){
    res.status(400).send('Error looking up for email');
    return next();
  } else if(user) {
    mail.sendMail(user.email, 0, user.name, user._id, function(result){
        if(result == 1){
          res.status(400).send('Error sending mail');
          return next();
        } else {
        res.status(200).send('Mail Sent');
        return next();
      }
      });
  } else {
    res.status(400).send('No user found');
    return next();
  }
})
}

//sending the password file
exports.sendPasswordFile = function(req, res, next) {
  var id = req.params.id;
  var link = "http://127.0.0.1:27017/api/forgotpassword/"+id;
  Staff.findById(id,function(err,user){
    if(user != null && user != ""){
    console.log(link);
    res.sendFile(path.resolve(__dirname, '../views', 'index.html'));
    return next();
  }
  else {
    res.status(200).send("Sorry ,You are not an authorised user");
    return next();
  }
});
}

//Resett Password
exports.changePassword = function(req,res,next){
 var id = req.body._id;
 var _password = req.body._password;
 Staff.findById(id,function(err, user){
 if(err) return next(err);
 user._password = _password;
 user.save(function(err, user)
   {
    if(err) throw err;
     console.log(user.name);
     res.status(200).send("Password Successfully resetted"+ user._password);
     console.log(user._password);
     return next();
   });
 });
}
