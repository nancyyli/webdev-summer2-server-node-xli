var mongoose = require('mongoose');
var userSchema = require('./user.schema.server');
var userModel = mongoose.model('UserModel', userSchema);

function findUserByCredentials(credentials) {
  return userModel.findOne(credentials, {username: 1});
}

function findUserById(userId) {
  return userModel.findById(userId);
}

function findUserByUsername(username) {
  return userModel.findOne({username: username}, {username: 1});
}
function createUser(user) {
  return userModel.create(user);
}

function findAllUsers() {
  return userModel.find();
}

function updateUser(user) {
  var user;
  userModel.findOneAndUpdate({_id: user._id},
     {$set:{username:user.username, firstName:user.firstName, lastName:user.lastName, phoneNumber: user.phoneNumber, address: user.address, email: user.email}}, {new: true}, function(err, doc){

    user = doc;
});
return user;
}

var api = {
  createUser: createUser,
  findAllUsers: findAllUsers,
  findUserByUsername: findUserByUsername,
  updateUser: updateUser,
  findUserById: findUserById,
  findUserByCredentials: findUserByCredentials
};

module.exports = api;