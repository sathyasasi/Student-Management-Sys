//modules
var mongoose = require('mongoose');
var path = require('path');
var cloudinary = require('cloudinary');
var bodyParser = require('body-parser');
//models
//var jsonHelper = require("../helpers/json");
var Staff = require('../models/staff.js');
var Student = require('../models/student.js');
var Dept = require('../models/dept.js');
exports.addStaff = function(req, res, next){
  var staff = new Staff(req.body);
  staff.save(function(err,staff) {
   if(err) return next(err);
   console.log("staff us added");
   res.send(staff);
   console.log(staff);
   return next();
});
}

exports.addStudent = function(req, res, next){
  var student = new Student(req.body);
  student.save(function(err,student) {
   if(err) return next(err);
   console.log("student us added");
   res.send(student);
   console.log(student);
   return next();
});
}
exports.addDept = function(req, res, next){
  var dept = new Dept(req.body);
  dept.save(function(err,dept) {
   if(err) return next(err);
   console.log("dept us added");
   res.send(dept);
   console.log(dept);
   return next();
});
}
