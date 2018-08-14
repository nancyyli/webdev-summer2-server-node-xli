
var mongoose = require('mongoose');
var submissionSchema = require('./submission.schema.server');
var submissionModel = mongoose.model(
  'SubmissionModel',
  submissionSchema
);

function submitQuiz(answers, quizId, userName) {
    return submissionModel.create({"quiz":quizId, "student": userName, "answers":answers});

}

function findSubmissionsByQuiz(quizId) {
    return submissionModel.find({quiz: quizId});
}
module.exports = {
    submitQuiz: submitQuiz,
    findSubmissionsByQuiz: findSubmissionsByQuiz
};