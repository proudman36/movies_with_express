const mongoose = require('mongoose');

const actorSchema = mongoose.Schema({
    act_id: {
        type: Number,
        required: true,
        IntegerOnly: true
    },
    act_fname:{
        type: String,
        required: true,
        maxlength: 200
    },
    act_lname: {
        type: String,
        required: true,
        maxlength: 200
    },
    act_gender: {
        type: String,
        required: true,
        maxlength: 200
    }
})
module.exports = mongoose.model('Actor',actorSchema)