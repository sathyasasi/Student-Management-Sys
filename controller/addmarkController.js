//modules
var mongoose = require('mongoose');
var path = require('path');
var cloudinary = require('cloudinary');
var bodyParser = require('body-parser');

//models
var Semester = require('../models/semester.js');
exports.addMark = function(req, res, next){
  var semester = new Semester(req.body);
  semester.save(function(err,semester) {
  if(err) return next(err);
   console.log("mark us added");
   res.send(semester);
   console.log(semester);
   return next();
});
}
