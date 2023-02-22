const mongoose = require('mongoose');

const directorSchema = mongoose.Schema({
    dir_id: {
        type: Number,
        required: true,
        IntegerOnly: true
    },
    dir_fname: {
        type: String,
        required: true,
        maxlength: 200
    },
    dir_lname: {
        type: String,
        required: true,
        maxlength: 200
    }

})

module.exports = mongoose.model('Director',directorSchema)