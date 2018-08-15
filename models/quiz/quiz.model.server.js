
var mongoose = require('mongoose');
var quizSchema = require('./quiz.schema.server');
var quizModel = mongoose.model(
  'QuizModel',
  quizSchema
);

function findAllQuizzes() {
    return quizModel.find();
}

function createQuiz(quiz) {
    return quizModel.create(quiz);
}

function findQuizById(quizId) {
    return quizModel.findById(quizId);
}


module.exports = {
    findAllQuizzes: findAllQuizzes,
    findQuizById: findQuizById,
    createQuiz: createQuiz
};