
var mongoose = require('mongoose');
var choiceSchema = require('./choice.schema.server');
var choiceModel = mongoose.model(
  'choiceModel',
  choiceSchema
);


module.exports = {
};