var mongoose = require('mongoose');
var answer = require('../answer/answer.schema.server');
var submissionSchema = mongoose.Schema({
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuizModel'
    },
    student: {
        type: mongoose.Schema.Types.String,
        ref: 'UserModel'
    },
    date: {
        type: Date, default: Date.now
    },
    answers : [answer]
}, {collection: 'submission'});
module.exports = submissionSchema;