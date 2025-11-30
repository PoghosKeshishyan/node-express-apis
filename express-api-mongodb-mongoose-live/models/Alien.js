const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        required: true,
    },

    tech: {
        type: String,
        required: true,
    },

    sub: {
        type: Boolean,
        required: true,
        default: false,
    }
})

module.exports = model('Alien', schema);