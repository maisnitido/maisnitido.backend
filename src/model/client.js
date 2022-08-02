const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi');

const userSchema = new Schema({
    corporate: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    active: {
        type: Boolean,
        default: false
    }
});

const clientDb = mongoose.model('clients', userSchema);

exports.clientDb = clientDb;

exports.validation = Joi.object({
    corporate: Joi.string().required()    
});