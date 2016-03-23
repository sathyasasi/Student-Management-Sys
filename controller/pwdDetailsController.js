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
Staff.findOne({'email':email}, function(err, staff){
  if(err){
    res.status(400).send('Error looking up for email');
    return next();
  } else if(staff) {
    mail.sendMail(staff.email, 0, staff.name, staff._id, function(result){
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

//sending the password file for staff
exports.sendPasswordFile = function(req, res, next) {
  var id = req.params.id;
  var link = "http://127.0.0.1:27017/api/forgotpassword/"+id;
  Staff.findById(id,function(err,staff){
    if(staff != null && staff != ""){
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

//Resett Password for staff
exports.changePassword = function(req,res,next){
 var id = req.body._id;
 var _password = req.body._password;
 Staff.findById(id,function(err, staff){
 if(err) return next(err);
 staff._password = _password;
 staff.save(function(err, staff)
   {
    if(err) throw err;
     console.log(staff.name);
     res.status(200).send("Password Successfully resetted"+ staff._password);
     console.log(staff._password);
     return next();
   });
 });
}
//Forgot password for student
exports.forgotPassword = function(req, res, next){
var email = req.params.email;
console.log(email);
Student.findOne({'email':email}, function(err, student){
  if(err){
    res.status(400).send('Error looking up for email');
    return next();
  } else if(user) {
    mail.sendMail(student.email, 0, student.name, student._id, function(result){
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

//sending the password file for student
exports.sendPasswordFile = function(req, res, next) {
  var id = req.params.id;
  var link = "http://127.0.0.1:52320/api/forgotpassword/"+id;
  Student.findById(id,function(err,student){
    if(student != null && student != ""){
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

//Resetting Password for student
exports.changePassword = function(req,res,next){
 var id = req.body._id;
 var _password = req.body._password;
 Student.findById(id,function(err, student){
 if(err) return next(err);
 student._password = _password;
 student.save(function(err, student)
   {
    if(err) throw err;
     console.log(student.name);
     res.status(200).send("Password Successfully resetted"+ student._password);
     console.log(student._password);
     return next();
   });
 });
}

