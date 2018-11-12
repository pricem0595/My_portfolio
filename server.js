const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var message;


app.use(express.static('public'));
app.use(bodyParser.json());

var smtpTrans = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: true,
    auth: {
        user: 'kevinwebmailer@gmail.com',
        pass: 'Rightmanlefthand1!234' 
    }
});

app.post('/', (req, res) => {
    message += 'Name: ' + req.body[0].value + '\n';
    message += 'Email: ' + req.body[1].value + '\n';
    message += 'Phone: ' + req.body[2].value + '\n';
    message += 'Message: ' + req.body[3].value + '\n';

    var mailOpts = {
        from: 'Kevin Mailer',
        to: 'Kaprice919@gmail.com',
        subject: 'You have a message!',
        text: message
    };
    
    smtpTrans.sendMail(mailOpts, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
});


app.listen(port);
console.log('Listening on port: ' + port);