
module.exports = function (app) {

    app.get('/api/quiz', findAllQuizzes);
    app.get('/api/quiz/:quizId', findQuizById);
    // app.post('/api/quiz/:quizId', submitQuiz);
    // app.get('/api/quiz/:quizId/submissions', findSubmissionsForQuiz);
  
    var quizModel = require('../models/quiz/quiz.model.server');
  
    // // var submissionModel = require('../models/submission/submission.model.server');
  
    // function findSubmissionsForQuiz(req, res) {
    //   var quizId = req.params.quizId;
    //   submissionModel
    //     .findSubmissionsForQuiz(quizId)
    //     .then(function (submissions) {
    //       res.json(submissions);
    //     });
    // }
  
    // function submitQuiz(req, res) {
    //   var submission = req.body;
    //   var quizId = req.params.quizId;
    //   submissionModel
    //     .submitQuiz(submission, quizId, 'alice')
    //     .then(function (submission) {
    //       res.json(submission);
    //     })
    // }
  
    // function findQuizById(req, res) {
    //   var quiz = quizzes.filter(function (q) {
    //     return q._id == req.params.quizId });
    //   res.json(quiz[0]);
    // }

    function findQuizById(req, res) {
        var id = req.params['quizId'];
        quizModel.findQuizById(id)
          .then(function (quiz) {
            res.json(quiz);
          })
    }
  
    function findAllQuizzes(req, res) {
        // quiz =   {
        //     "name": "quiz 1",
        //     "questions": 
        //       {"name": "question 1",
        //       "points": 12,
        //       "description": "description 2",
        //       "questionType": "Essay"}
            
        //   },
        // quizModel.createQuiz(quiz).then(function (quizzes) {
        //     res.send(quizzes);
        // });
        quizModel.findAllQuizzes()
        .then(function (quizzes) {
          res.send(quizzes);
        })
    }
  
  }