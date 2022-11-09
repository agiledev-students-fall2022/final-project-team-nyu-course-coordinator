const mongoose = require('mongoose');

const User =  mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    major: {type: String, required: true},
    year: {type: Number, required: true},
});

module.exports = mongoose.model('Users', User);