var mongoose = require('mongoose');
var choice = require('../choice/choice.schema.server');
var questionSchema = mongoose.Schema({
    name: String,
    points: Number,
    description: String,
    questionType: String,
    blanks: [String],
    true: Boolean,
    choices: [choice]
}, {collection: 'question'});
module.exports = questionSchema;

//Question Types: 
// Multiple choice
// Essay
// Fill Blanks
// True False