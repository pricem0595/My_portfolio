const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var message;


app.use(express.static('public'));
app.use(bodyParser.json());



app.listen(port);
console.log('Listening on port: ' + port);