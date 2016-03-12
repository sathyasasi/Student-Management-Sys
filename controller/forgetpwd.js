//modules
var mongoose = require('mongoose');
var path = require('path');
var cloudinary = require('cloudinary');
var bodyParser = require("body-parser");
var mail = require('../helpers/mail.js');
var Staff = require('../models/staff.js');
//var forgot = require('views');
//var passwordReset = require('../');

exports.forgotpassword = function(req, res, next){
var email = req.params.email;
console.log(email);
Staff.findOne({'email':email}, function(err, staff){
 if(err){
    res.status(400).send('Error looking up for email');
    return next();
  }
    else
    {
    res.status(400).send('Mailsend');
    return next();
  }

/*  } else if(staff) {
    mail.sendMail(staff.email, function(result){
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
  }*/

})
}
/*exports.forgetpassword = function(req, res, next){

      var email = req.body.email;
      var reset = forgot(email, function (err) {
          if (err) res.end('Error sending message: ' + err)
          else res.end('Check your inbox for a password reset message.')
      });

      reset.on('request', function (req_, res_) {
          req_.session.reset = { email : email, id : reset.id };
          fs.createReadStream(__views + '/forgot.html').pipe(res_);
      });


}*/
