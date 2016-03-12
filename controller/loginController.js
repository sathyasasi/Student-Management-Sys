//modules
var mongoose = require('mongoose');
var path = require('path');
var cloudinary = require('cloudinary');
var bodyParser = require('body-parser');

//models
var Staff = require('../models/staff.js');
var common = require('../helpers/common.js')
exports.login = function(req, res, next){
  var staff = req.body.staff;
  var password = staff.password;

  if(typeof staff.phone == 'undefined' || staff.phone == ''){
    res.status(400).send('phone is missing');
    return next();
  } else {
    var phone = staff.phone;
    if(phone.substr(0, 3) != '+91' && phone.split(phone.substr(0, 3))[1].length != 10) {
      res.status(400).send('Phone number should belong to India.');
      return next();
    }
  }

  Staff.findOne({'phone': staff.phone}, function(err, staff){
    if(err){
      res.status(400).send('error lookingup user');
      return next();
    } else if(!staff) {
      res.status(400).send('No user exists');
      return next();
    } else if(staff){
        var existing = common.decrypt(staff._password);
        if (password !== existing) {
          res.status(400).send('Password is wrong');
          return next();
        } else {
        staff.createSession(function(err, staff){
          if(err){
            res.status(400).send('error logging in user');
            return next();
          } else if(staff){
            res.status(200).send(new Response.respondWithData(staff));
            return next();
          }
        });
      }
    }
  });
}
