import mongoose from 'mongoose';

const User =  mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    major: {
        type: String, 
        required: true
    },
    year: {
        type: Number, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
});

module.exports = mongoose.model('Users', User);