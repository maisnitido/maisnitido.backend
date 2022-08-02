const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }, 
    clientId: {
        type: Number
    },
    active: {
        type: Boolean,
        default: true
    }
});

const userDB = mongoose.model('users', userSchema);

module.exports = userDB;