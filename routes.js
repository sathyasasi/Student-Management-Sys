var authController = require('./controller/auth.js');
var addDetailController = require('./controller/addDetailController.js');
var pwdDetailsController = require('./controller/pwdDetailsController.js');
var viewDetailController = require('./controller/viewDetailController.js');
var update = require('./controller/update');

module.exports = function(app){
  //singu api
  app.post('/api/user/signupstudent', authController.signupstudent);
  app.post('/api/user/loginstudent', authController.loginstudent);
  app.post('/api/user/signupstaff', authController.signupstaff);
  app.post('/api/user/loginstaff', authController.loginstaff);

  //add detail api
  app.post('/api/addstaff',addDetailController.addStaff);
  app.post('/api/addstudent',addDetailController.addStudent);
  app.post('/api/addmark', addDetailController.addMark);
  app.post('/api/adddept',addDetailController.addDept);

  //view detail api
  app.get('/api/staff/viewprofile/:id',viewDetailController.viewProfileStaff);
  app.get('/api/student/viewprofile/:id',viewDetailController.viewProfileStudent);
  app.get('/api/student/viewmark/:id',viewDetailController.viewStudentMark );

  //update api
  app.post('/api/updatestudent',update.updatestudent);
  app.post('/api/updatestaff',update.updatestaff);

  //pwd detail api
  app.get('/api/staff/forgotpassword/:email',pwdDetailsController.forgotPassword);
  app.get('/api/staff/sendfile/:id',pwdDetailsController.sendPasswordFile);
}
