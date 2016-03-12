var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Semester = require('../models/semester');
//var Support = require('../models/support');

module.exports.getMarkModel = function(data, callback){
  var newMark = new Mark ({
    studentId: data.studentId,
    deptId: data.deptId,
    semName: data.semName,
    semType: data.semType,
    subject: data.subject,
    subName: data.subName,
    subMark: data.subMark,
    attendance: data.attendance,
    result: data.result,
    percentage: data.percentage,

  });
  callback(newMark);
}
