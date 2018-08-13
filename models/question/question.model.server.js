
var mongoose = require('mongoose');
var questionSchema = require('./question.schema.server');
var questionModel = mongoose.model(
  'QuestionModel',
  questionSchema
);

function createQuestion(question) {
    return questionModel.create(question);
}

module.exports = {
    createQuestion: createQuestion
};