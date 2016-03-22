//modules
var mongoose = require('mongoose');
var path = require('path');
var cloudinary = require('cloudinary');
var bodyParser = require('body-parser');

//models
var Semester = require('../models/semester.js');
var Staff = require('../models/staff.js');
var Student = require('../models/student.js');
var Dept = require('../models/dept.js');

//addstaff
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

//addstudent
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

//adddepartment
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

//addmark
exports.addMark = function(req, res, next){
  var semester = new Semester(req.body);
  var studentId = req.body.studentId;
  Semester.find({"studentId": studentId}, function(err, user){
    if(semester != null && semester != ""){
        res.status(200).send(" student exists ");
    }
    else {
      semester.save(function(err,semester) {
      if(err) return next(err);
       console.log("mark us added");
       res.send(semester);
       console.log(semester);
       return next();
    });
    }
  });
}
