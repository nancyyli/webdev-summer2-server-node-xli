var mongoose = require('mongoose');
var choiceSchema = mongoose.Schema({
    text: String, 
    value: String,
    correct: Boolean
}, {collection: 'choice'});
module.exports = choiceSchema;