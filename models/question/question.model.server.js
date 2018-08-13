
var mongoose = require('mongoose');
var questionSchema = require('./question.schema.server');
var questionModel = mongoose.model(
  'QuestionModel',
  questionSchema
);


module.exports = {
};