
var mongoose = require('mongoose');
var answerSchema = require('./answer.schema.server');
var answerModel = mongoose.model(
  'AnswerModel',
  answerSchema
);


module.exports = {
};