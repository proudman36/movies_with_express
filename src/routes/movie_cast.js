const express = require('express')

const movie_castSchema = require('../models/movie_cast')

const router = express.Router()

const path = 'mov_cas'

router.post(`/${path}`,(req,res) => {
    const mov_cas = movie_castSchema(req.body);
    mov_cas.save().then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

router.get(`/${path}`,(req,res) => {
    movie_castSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}))
})

router.get(`/${path}`,(req,res) => {
    const { id } = req.params
    movie_castSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}))
})


router.delete(`/${path}`, (req, res) => {
    const { id } = req.params;
    userSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  router.put(`/${path}`, (req, res) => {
    const { id } = req.params;
    const { act_id, mov_id, role} = req.body;
    userSchema
      .updateOne({ _id: id }, { $set: { act_id, mov_id, role}})
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router;