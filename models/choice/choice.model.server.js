
var mongoose = require('mongoose');
var choiceSchema = require('./choice.schema.server');
var choiceModel = mongoose.model(
  'choiceModel',
  choiceSchema
);

function createChoice(choice) {
    return choiceModel.create(choice);
}

module.exports = {
    createChoice: createChoice
};