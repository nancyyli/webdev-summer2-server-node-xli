module.exports = function (app) {

    app.post('/api/course/:courseId/section', createSection);
    app.get('/api/course/:courseId/section', findSectionsForCourse);
    app.post('/api/section/:sectionId/enrollment', enrollStudentInSection);
    app.get('/api/student/section', findSectionsForStudent);
    app.get('/api/section/:sectionId', findSectionById);
    app.delete('/api/section/:sectionId', deleteSection);
    app.delete('/api/section/:sectionId/enrollment/:enrollmentId', unenrollStudentinSection);
    app.put('/api/section/:sectionId', updateSectionById);

    var sectionModel = require('../models/section/section.model.server');
    var enrollmentModel = require('../models/enrollment/enrollment.model.server');
  
    function findSectionsForStudent(req, res) {
      var currentUser = req.session.currentUser;
      var studentId = currentUser._id;
      enrollmentModel
        .findSectionsForStudent(studentId)
        .then(function(enrollments) {
          res.json(enrollments);
        });
    }

    function updateSectionById(req, res) {
        var sectionId = req.params.sectionId;
        var updatedSection = req.body;
        var section = sectionModel.updateSection(sectionId, updatedSection);
        res.send(section);
    }
    
    function enrollStudentInSection(req, res) {
      var sectionId = req.params.sectionId;
      var currentUser = req.session.currentUser;
      var studentId = currentUser._id;
      var enrollment = {
        student: studentId,
        section: sectionId
      };
  
      sectionModel
        .decrementSectionSeats(sectionId)
        .then(function () {
          return enrollmentModel
            .enrollStudentInSection(enrollment)
        })
        .then(function (enrollment) {
          res.json(enrollment);
        })
    }

    function unenrollStudentinSection(req, res) {
      var sectionId = req.params.sectionId;
      var enrollmentId = req.params.enrollmentId;
      var currentUser = req.session.currentUser;
      var studentId = currentUser._id;

  
      sectionModel
        .incrementSectionSeats(sectionId)
        .then(function () {
          return enrollmentModel
            .unenrollStudentinSection(enrollmentId);
        })
        .then(function (enrollment) {
          res.json(enrollment);
        })

    }

    function deleteSection(req, res) {
        var sectionId = req.params.sectionId;
        
        sectionModel.deleteSection(sectionId)
        .then(function() {
          enrollmentModel.findEnrollmentBySectionId(sectionId)
          .then(function(enrollment) {
            enrollmentModel.unenrollStudentinSection(enrollment._id);
          })
          .then(function(enrollment) {
            res.json(enrollment);
          })
        }) 
    }

    function findSectionById(req, res) {
      var sectionId = req.params['sectionId'];
      sectionModel.findSectionById(sectionId)
      .then(function(section) {
        res.json(section);
      })
    }
  
    function findSectionsForCourse(req, res) {
      var courseId = req.params['courseId'];
      sectionModel
        .findSectionsForCourse(courseId)
        .then(function (sections) {
          res.json(sections);
        })
    }
  
    function createSection(req, res) {
      var section = req.body;
      sectionModel
        .createSection(section)
        .then(function (section) {
          res.json(section);
        })
    }
  };