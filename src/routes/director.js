const express = require('express');

const directorSchema = require('../models/director');

const router = express.Router();

const path = 'director';


router.post(`/${path}`, (req,res) => {
    const director = directorSchema(req.body);
    director.save().then((data) => res.json(data))
     .catch((error) => res.json({message: error}))
 
 
 })
 router.get(`/${path}`, (req,res) =>{
    directorSchema
    .find()
     .then((data) => res.json(data))
     .catch((error) => res.json({message: error}) )
 })

 router.get(`/${path}`, (req,res) =>{
    const { id } = req.params
    directorSchema
    .findById(id)
     .then((data) => res.json(data))
     .catch((error) => res.json({message: error}) )
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
  const { dir_id, dir_fname, dir_lname } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { dir_id,  dir_fname, dir_lname } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

 

 module.exports = router;