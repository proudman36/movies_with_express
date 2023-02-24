const express = require('express');

const actorSchema = require('../models/actor')

const controller = require('../controllers/actor')

const router = express.Router();

const path = 'actor';

router.post(`/${path}`, (req,res) => {
   const actor = actorSchema(req.body);
   actor.save().then((data) => res.json(data))
    .catch((error) => res.json({message: error}))


})

router.get(`/${path}`, (req,res) => {
    actorSchema
    .find()
     .then((data) => res.json(data))
     .catch((error) => res.json({message: error}))
 
 
 })

 router.get(`/${path}/:id`, (req,res) => {
    const { id } =req.params
    actorSchema
    .findById(id)
     .then((data) => res.json(data))
     .catch((error) => res.json({message: error}))
 
 
 })

 router.delete(`/${path}/:id`,(req, res)=>{
    const {id} = req.params;
    actorSchema
    .remove({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message: error}))

})
router.put(`/${path}/:id`, (req, res) => {
    const { id } = req.params;
    const { act_id, act_fname, act_lname, act_gender } = req.body;
    userSchema
      .updateOne({ _id: id }, { $set: { act_id, act_fname, act_lname, act_gender } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });


module.exports = router;


