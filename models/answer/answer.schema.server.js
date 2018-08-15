var mongoose = require('mongoose');
var answerSchema = mongoose.Schema({
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuestionModel'
    },
    answer: String
}, {collection: 'answer'});
module.exports = answerSchema;