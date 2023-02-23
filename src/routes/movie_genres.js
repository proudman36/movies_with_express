const express = require('express');

const movie_genresSchema = require('../models/movie_genres');

const router = express.Router();

const path = 'mov_gen';


router.post(`/${path}`, (req,res) => {
    const mov_gen = directorSchema(req.body);
    mov_gen.save().then((data) => res.json(data))
     .catch((error) => res.json({message: error}))
 
 
 })
 router.get(`/${path}`, (req,res) =>{
    movie_genresSchema
    .find()
     .then((data) => res.json(data))
     .catch((error) => res.json({message: error}) )
 })

 router.get(`/${path}:id`, (req,res) =>{
    const { id } = req.params
    movie_genresSchema
    .findById(id)
     .then((data) => res.json(data))
     .catch((error) => res.json({message: error}) )
 })

 router.delete(`/${path}:id`, (req, res) => {
    const { id } = req.params;
    userSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  router.put(`/${path}:id`, (req, res) => {
    const { id } = req.params;
    const {mov_id, gen_id} = req.body;
    userSchema
      .updateOne({ _id: id }, { $set: { mov_id, gen_id}})
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

 

 module.exports = router;