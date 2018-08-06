var mongoose = require('mongoose');
var sectionSchema = require('./section.schema.server');
var sectionModel = mongoose.model('SectionModel', sectionSchema);

function createSection(section) {
  return sectionModel.create(section);
}

function findSectionsForCourse(courseId) {
  return sectionModel.find({courseId: courseId});
}

function findSectionById(sectionId) {
  return sectionModel.findById(sectionId);
}

function updateSection(sectionId, section) {
  var section;
  sectionModel.findOneAndUpdate({_id: sectionId},
     {$set:{name:section.name, seats:section.seats}}, {new: true}, function(err, doc){

    user = doc;
  })
}

function deleteSection(sectionId) {
  return enrollmentModel.remove({_id: sectionId});
}

function decrementSectionSeats(sectionId) {
  return sectionModel.update({
    _id: sectionId
  }, {
    $inc: {seats: -1}
  });
}

function incrementSectionSeats(sectionId) {
  return sectionModel.update({
    _id: sectionId
  }, {
    $inc: {seats: +1}
  });
}

module.exports = {
  createSection: createSection,
  findSectionsForCourse: findSectionsForCourse,
  decrementSectionSeats: decrementSectionSeats,
  findSectionById: findSectionById,
  deleteSection: deleteSection,
  updateSection: updateSection,
  incrementSectionSeats: incrementSectionSeats
};