const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
    mov_id:{
        type:Number,
        required: true,
        IntegerOnly:true
    },
    mov_title: {
        type:String,
        required: true,
        maxlength: 200
    },
    mov_year:{
        type: Number,
        required: true,
        IntegerOnly: true
    },
    mov_time:{
        type: Number,
        required: true
    },
    mov_lang:{
        type:String,
        required:true,
        maxlength:50
    },
    mov_dt_rel:{
        type: Date,
        required: true
    },
    mov_rel_country:{
        type:String,
        required: true,
        maxlength: 200
    }
})

module.exports = mongoose.model('Movie',movieSchema)