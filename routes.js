var authController = require('./controller/auth.js');
var addmarkController = require('./controller/addmarkController.js');
var forgetpwd = require('./controller/forgetpwd.js');
var addstaffController = require('./controller/addstaffController.js');
var loginController = require('./controller/loginController.js');
var update = require('./controller/update');
module.exports = function(app){
  app.post('/api/user/signupstudent', authController.signupstudent);
  app.post('/api/user/loginstudent', authController.loginstudent);
  app.post('/api/user/signupstaff', authController.signupstaff);
  app.post('/api/user/loginstaff', authController.loginstaff);
  app.post('/api/addmark', addmarkController.addMark);
  app.get("/api/forgetpwd/:email",forgetpwd.forgotpassword);
  app.post('/api/addstaff',addstaffController.addStaff);
  app.post('/api/addstudent',addstaffController.addStudent);
  app.post('/api/adddept',addstaffController.addDept);
  app.post('/api/loginstaff',loginController.login);
  app.post('/api/updatestudent',update.updatestudent);
  app.post('/api/updatestaff',update.updatestaff);
}
