//modules
var mongoose = require('mongoose');
var path = require('path');
var cloudinary = require('cloudinary');
var bodyParser = require('body-parser');

//models
var Staff = require('../models/staff.js');
var Student = require('../models/student.js');
var Dept = require('../models/dept.js');
var Semester = require('../models/semester');

//View Mark
exports.viewStudentMark = function(req,res,next){
  var id = req.params.id;
  Semester.findById(id,function(err,semester){
    if (err) return next(err);
    console.log(semester);
    res.send(semester);
});
}

//viewstaff
exports.viewProfileStaff = function(req,res,next){
  var id = req.params.id;
  Staff.findById(id,function(err, user){
    if (err) return next(err);
    res.send(user);
  });
}

//viewstudent
exports.viewProfileStudent = function(req,res,next){
  var id = req.params.id;
  Student.findById(id,function(err, user){
    if (err) return next(err);
    res.send(user);
  });
}

//viewdepartment
exports.viewDept = function(req, res, next){
  var id = req.params.id;
  Dept.findById(id,function(err, user){
    if (err) return next(err);
    res.send(dept);
  })
}
