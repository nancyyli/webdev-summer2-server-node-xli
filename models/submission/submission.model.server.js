
var mongoose = require('mongoose');
var submissionSchema = require('./submission.schema.server');
var submissionModel = mongoose.model(
  'SubmissionModel',
  submissionSchema
);

function submitQuiz(answers, quizId, userId) {
    return submissionModel.create({"quiz":quizId, "student": userId, "answers":answers});

}
module.exports = {
    submitQuiz: submitQuiz
};