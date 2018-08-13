var mongoose = require('mongoose');
var question = require('../question/question.schema.server');
var quizSchema = mongoose.Schema({
    name: String,
    questions:[question]
}, {collection: 'quiz'});
module.exports = quizSchema;