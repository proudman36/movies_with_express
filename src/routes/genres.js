const express = require('express');

const genresSchema = require('../models/genres');

const router = express.Router();

const path = 'genres';


router.post(`/${path}`, (req,res) => {
    const genres = directorSchema(req.body);
    genres.save().then((data) => res.json(data))
     .catch((error) => res.json({message: error}))
 
 
 })
 router.get(`/${path}`, (req,res) =>{
    genresSchema
    .find()
     .then((data) => res.json(data))
     .catch((error) => res.json({message: error}) )
 })

 router.get(`/${path}`, (req,res) =>{
    const { id } = req.params
    genresSchema
    .findById(id)
     .then((data) => res.json(data))
     .catch((error) => res.json({message: error}) )
 })

 

 module.exports = router;