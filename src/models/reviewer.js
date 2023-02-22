const mongoose = require('mongoose')

const reviewerSchema = mongoose.Schema({
    rev_id:{
        type:Number,
        required:true,
        IntegerOnly:true
    },
    rev_name:{
        type:String,
        required:true,
        maxlength: 200
    }
})

module.exports = mongoose.model('Reviewer',reviewerSchema);