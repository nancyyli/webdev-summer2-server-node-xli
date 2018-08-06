
module.exports = function (app) {
  app.get('/api/user', findAllUsers);
  app.get('/api/user/:userName', findUserByUsername);
  app.post('/api/user', createUser);
  app.get('/api/profile', profile);
  app.put('/api/profile', updateProfile);
  app.post('/api/logout', logout);
  app.post('/api/login', login);
  app.delete('/api/profile', deleteUser);

  var userModel = require('../models/user/user.model.server');

  function login(req, res) {
    var credentials = req.body;
    userModel
      .findUserByCredentials(credentials)
      .then(function(user) {
        req.session['currentUser'] = user;
        res.json(user);
      })
  }

  function logout(req, res) {
    req.session.destroy();
    res.send(200);
  }

  function findUserById(req, res) {
    var id = req.params['userId'];
    userModel.findUserById(id)
      .then(function (user) {
        res.json(user);
      })
  }

  function deleteUser(req, res) {
    var userId = req.session['currentUser']._id;
    userModel.deleteUser(userId)
      .then(function(user) {
        res.json(user);
      })
  }

  function findUserByUsername(req, res) {
    var username = req.params['userName'];
    userModel.findUserByUsername(username).then(function (user) {
      res.json(user);
    })
  }

  function profile(req, res) {
    userModel.findUserById(req.session['currentUser']._id).then(function (user) {
      res.json(user);
    })
  }

  function createUser(req, res) {
    var user = req.body;
    userModel.createUser(user)
      .then(function (user) {
        req.session['currentUser'] = user;
        res.send(user);
      })
  }

  function updateProfile(req, res) {
    var updatedUser = req.body;
    var user = userModel.updateUser(updatedUser);  //change current user later
    res.send(user); 
  }

  function findAllUsers(req, res) {
    userModel.findAllUsers()
      .then(function (users) {
        res.send(users);
      })
  }
}