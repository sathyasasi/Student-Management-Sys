var mailer = require("nodemailer");

// Use Smtp Protocol to send Email
var smtpTransport = mailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "sathya29mca@gmail.com",
        pass: ""
    }
});

function sendMail(to, body, name, id, callback){
  var html = '', subject = '';

  switch(body){
    case 0:
      link = "http://127.0.0.1:27017/api/user/resetpassword/"+id
      subject = "SMS - Forgot Password",
      html = "Hello " + name + ", <br> Please click <a href=" + link + ">here</a> to change your password";
      break;

    case 1:
     link = "http://127.0.0.1:1234/api/user/resetpin/"+id
     subject = "SMS - Forgot Pin",
     html = "Hello " + name + ", <br> Please click <a href="+ link +">here</a> to change your pin";
     break;
  }

  var mail = {
      from: "Sathya Sasi<sathya29mca@gmail.com>",
      to: to,
      subject: subject,
      html: html
  }

  smtpTransport.sendMail(mail, function(error, response){
      if(error){
          console.log(error);
          callback(1);
      } else{
          console.log("Mail sent: " + response.message);
          smtpTransport.close();
          callback(0);
      }
  });
}

exports.sendMail = sendMail;
