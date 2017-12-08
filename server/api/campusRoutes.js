const express = require('express');
const {Campus} = require('../db/models');
const router = express.Router();
const db = require('../db');

router.get('/', function(req, res, next){
 Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
});

router.get('/:campusId', function(req, res, next) {
    const id = req.params.campusId;
      Campus.findById(id)
      .then(campus => {
        if (!campus) {
          res.json(`Campus id ${id} doesn't exists!!!`);
        } else {
          res.json(campus);
        }
      })
      .catch(next);
  });

router.post('/', function(req, res, next){
    Campus.create(req.body)
    .then(newCampus => {
        res.json(newCampus);
    })
    .catch(next);
});

router.put('/:campusId', function(req, res, next) {
    const id = req.params.campusId;
    Campus.update(req.body, {
        where: {id: id}
      }
    )
    .then(updatedCampus => res.json(updatedCampus))
    .catch(next);
  });

router.delete('/:campusId', function(req, res, next){
    const id = req.params.campusId;
        Campus.destroy({
          where: {
            id: id
          }
        })
        .then(() => {
          return Campus.findAll()
        })
        .then(campuses => res.send(campuses))
        .catch(next);
      });
module.exports = router;