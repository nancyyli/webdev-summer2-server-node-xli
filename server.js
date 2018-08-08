var express = require('express')
var app = express()
var session = require('express-session')
var bodyParser = require('body-parser')

const express = require('express');
const path = require('path');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/simple-blog-app-angular'));

app.get('/*', function (req, res) {
  res.sendFile(path.join('./dist/simple-blog-app-angular/index.html'));
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  resave: false,
  saveUninitialized: true, 
  secret: 'any string'
}));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/webdev-summer2');

const userService = require('./services/user.service.server'); //(app);
userService(app);

require('./services/section.service.server')(app);

app.listen(process.env.PORT || 3000)