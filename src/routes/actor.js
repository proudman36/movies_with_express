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


module.exports = router;


