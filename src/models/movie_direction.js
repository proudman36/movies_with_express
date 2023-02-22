const mongoose = require('mongoose')

const movie_directionSchema = mongoose.Schema({
    dir_id: {
        type:Number,
        required: true,
        IntegerOnly: true
    },
    mov_id:{
        type:Number,
        required: true,
        IntegerOnly: true
    }

})
module.exports = mongoose.model('Movie Direction',movie_directionSchema)