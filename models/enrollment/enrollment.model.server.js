
var mongoose = require('mongoose');
var enrollmentSchema = require('./enrollment.schema.server');
var enrollmentModel = mongoose.model(
  'EnrollmentModel',
  enrollmentSchema
);

function enrollStudentInSection(enrollment) {
  return enrollmentModel.create(enrollment);
}

function unenrollStudentInSection(enrollmentId) {
  return enrollmentModel.remove({_id: enrollmentId});
}

function findEnrollmentBySectionId(sectionId) {
  return enrollmentModel.find({section: sectionId}).exec();
}



function findSectionsForStudent(studentId) {
  return enrollmentModel
    .find({student: studentId})
    .populate('section')
    .exec();
}

module.exports = {
  enrollStudentInSection: enrollStudentInSection,
  unenrollStudentinSection: unenrollStudentInSection,
  findEnrollmentBySectionId: findEnrollmentBySectionId,
  findSectionsForStudent: findSectionsForStudent
};