const express = require('express');
const {Student} = require('../db/models');
const {Campus} = require('../db/models');
const router = express.Router();
const db = require('../db')

router.get('/', function(req, res, next){
     Student.findAll()
    .then(students => res.json(students))
    .catch(next);
});

router.get('/:studentId', function(req, res, next){
    const id = req.params.studentId;
    Student.findById(id)
    .then(student => {
      if (!student) {
        res.json(`Student id ${id} doesn't exists!!!`)
      } else {
        res.json(student);
      }
    })
    .catch(next);
});

router.post('/', function(req, res, next){
    Student.create(req.body)
    .then(newStudent =>    {
        res.json(newStudent);
    })
    .catch(next);
});

router.put('/:studentId', function(req, res, next) {
    const id = req.params.studentId;
    Student.update(req.body, {
        where: {id: id}
      }
    )
    .then(updatedStudent => res.json(updatedStudent))
    .catch(next);
  });

  router.delete('/:studentId', function(req, res, next){
    const id = req.params.studentId;
        Student.destroy({
          where: {
            id: id
          }
        })
        .then(() => {
          return Student.findAll()
        })
        .then(students => res.send(students))
        .catch(next);
      });
  module.exports = router;