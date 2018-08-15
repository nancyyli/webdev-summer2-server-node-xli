
module.exports = function (app) {

    app.get('/api/quiz', findAllQuizzes);
    app.get('/api/quiz/:quizId', findQuizById);
    app.post('/api/quiz/:quizId', submitQuiz);
    app.get('/api/quiz/:quizId/submissions', findSubmissionsByQuiz);
    app.get('/api/quiz/:quizId/submissions/:submissionId', findSubmissionById);
  
    var quizModel = require('../models/quiz/quiz.model.server');
    var choiceModel = require('../models/choice/choice.model.server');
    var questionModel = require('../models/question/question.model.server');
    var submissionModel = require('../models/submission/submission.model.server');
  
    function findSubmissionsByQuiz(req, res) {
      var quizId = req.params.quizId;
      submissionModel
        .findSubmissionsByQuiz(quizId)
        .then(function (submissions) {
          res.json(submissions);
        });
    }

    function findSubmissionById(req, res) {
      var submissionId = req.params.submissionId;
      submissionModel 
        .findSubmissionById(submissionId)
        .then(function (submission) { 
          res.json(submission);
        })
    }
  
    function submitQuiz(req, res) {
      var answers = req.body;
      var quizId = req.params.quizId;
      var userName = req.session['currentUser'].username;
      submissionModel
        .submitQuiz(answers, quizId, userName)
        .then(function (answers) {
          res.json(answers);
        })
    }
  

    function findQuizById(req, res) {
        var id = req.params['quizId'];
        quizModel.findQuizById(id)
          .then(function (quiz) {
            res.json(quiz);
          })
    }
  
    function findAllQuizzes(req, res) {

        // quizModel.createQuiz(quiz).then(function (quizzes) {
        //     res.send(quizzes);
        // });
        quizModel.findAllQuizzes()
        .then(function (quizzes) {
          res.send(quizzes);
        })
    }
  
  }