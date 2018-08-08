var express = require('express')
var app = express()
var session = require('express-session')
var bodyParser = require('body-parser')


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://webdev-client-angular-xli.herokuapp.com"); //change back to local host later
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
mongoose.connect('mongodb://heroku_5b5zrf07:d7p185r5u0k0644ddpnitf84ev@ds215822.mlab.com:15822/heroku_5b5zrf07');

const userService = require('./services/user.service.server'); //(app);
userService(app);

require('./services/section.service.server')(app);

app.listen(process.env.PORT || 3000)