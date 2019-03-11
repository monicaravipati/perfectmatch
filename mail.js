var nodemailer = require('nodemailer');
var express = require('express'),
    app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'oakridgeitsolutions@gmail.com',
    pass: 'Username'
  }
});
var mailOptions = {
  from: 'oakridgeitsolutions@gmail.com',
  to: 'monicamonu999.mm@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});