const express = require('express');

const ratingSchema = require('../models/rating');

const router = express.Router();

const path = 'rating';


router.post(`/${path}`, (req,res) => {
    const rating = directorSchema(req.body);
    rating.save().then((data) => res.json(data))
     .catch((error) => res.json({message: error}))
 
 
 })
 router.get(`/${path}`, (req,res) =>{
    ratingSchema
    .find()
     .then((data) => res.json(data))
     .catch((error) => res.json({message: error}) )
 })

 router.get(`/${path}`, (req,res) =>{
    const { id } = req.params
    ratingSchema
    .findById(id)
     .then((data) => res.json(data))
     .catch((error) => res.json({message: error}) )
 })

 

 module.exports = router;