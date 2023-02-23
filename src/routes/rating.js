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

 router.get(`/${path}:id`, (req,res) =>{
    const { id } = req.params
    ratingSchema
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
    const {mov_id, rev_id, rev_stars, num_o_ratings} = req.body;
    userSchema
      .updateOne({ _id: id }, { $set: { mov_id, rev_id, rev_stars, num_o_ratings}})
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });


 

 module.exports = router;