const mongoose = require('mongoose');

//User schema
const User = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    classes: [{
        section_id: {type: String, required: true},
    }],
});

module.exports = mongoose.model('User', User);
