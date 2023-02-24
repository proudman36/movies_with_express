const mongoose = require('mongoose');

const Movie_genresSchema = mongoose.Schema({
    mov_id: {
        type: Number,
        required: true,
        IntegerOnly: true
    },
    gen_id: {
        type: Number,
        required: true,
        IntegerOnly: true
    },
   

})

module.exports = mongoose.model('Movie_genres',Movie_genresSchema)