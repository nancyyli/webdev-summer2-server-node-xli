var mongoose = require('mongoose');
var questionSchema = mongoose.Schema({
    name: String,
    points: Number,
    description: String,
    questionType: String,
    blanks: String,
    true: Boolean,
    choices: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ChoiceModel'
      }]
}, {collection: 'question'});
module.exports = questionSchema;

//Question Types: 
// Multiple choice
// Essay
// Fill Blanks
// True False