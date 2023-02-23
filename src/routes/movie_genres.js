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

 router.get(`/${path}`, (req,res) =>{
    const { id } = req.params
    movie_genresSchema
    .findById(id)
     .then((data) => res.json(data))
     .catch((error) => res.json({message: error}) )
 })

 

 module.exports = router;