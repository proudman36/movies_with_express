const express = require('express')
const movieSchema = require('../models/movie')

const router = express.Router()

const path = 'movie'

router.post(`/${path}`,(req,res)=>{
    const movie = movieSchema(req.body);
    movie.save().then((data)=> res.json(data))
    .catch((error)=>res.json({message:error}))
})

router.get(`/${path}`,(req,res)=>{
    movieSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error) => res.json({message:error}))
})

module.exports = router;