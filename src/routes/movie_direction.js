const express = require('express');

const movie_directionSchema = require('../models/movie_direction')

const router = express.Router()

const path = 'mov_dir';

router.post(`/${path}`, (req,res) => {
    const mov_dir = movie_directionSchema(req.body);
    mov_dir.save().then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})
router.get(`/${path}`, (req,res) => {
    movie_directionSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
})

router.get(`/${path}`, (req,res) => {
    const { id } = req.params
    movie_directionSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
})



module.exports = router;

