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

module.exports = router;