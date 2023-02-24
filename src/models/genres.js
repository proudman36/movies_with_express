const mongoose = require('mongoose');

const GenresSchema = mongoose.Schema({
    gen_id: {
        type: Number,
        required: true,
        IntegerOnly: true
    },
    gen_title: {
        type: String,
        required: true,
        maxlength: 200
    }

})

module.exports = mongoose.model('Genres',GenresSchema)