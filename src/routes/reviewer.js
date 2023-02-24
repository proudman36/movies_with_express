const express = require('express')
const reviewerSchema = require('../models/reviewer')

const router = express.Router()

const path = 'reviewer';

router.post(`/${path}`,(req,res) =>{
    const reviewer = reviewerSchema(req.body)
    reviewer.save().then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}))
})

router.get(`/${path}`,(req,res)=>{
    reviewerSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

router.get(`/${path}:id`,(req,res)=>{
    const { id } = req.params
    reviewerSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})
router.delete(`/${path}/:id`,(req, res)=>{
    const {id} = req.params;
    reviewerSchema
    .remove({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message: error}))

})
router.put(`/${path}:id`, (req, res) => {
    const { id } = req.params;
    const {rev_id, rev_name} = req.body;
    reviewerSchema
      .updateOne({ _id: id }, { $set: {  rev_id, rev_name }})
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router;