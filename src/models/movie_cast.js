const mongoose = require('mongoose');
const movie_castSchema = mongoose.Schema({
    act_id:{
        type:Number,
        required: true,
        IntegerOnly: true
    },
    mov_id:{
        type:Number,
        required: true,
        IntegerOnly: true
    },
    role:{
        type:String,
        required:true,
        maxlength: 200
    }
})
module.exports = mongoose.model('Movie Cast',movie_castSchema)