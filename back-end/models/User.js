const mongoose = require('mongoose');
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const User = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    major: {type: String, required: true},
    year: {type: Number, required: true},
    classes: [{
        class_id: {type: String, required: true},
        section_num: {type: Number, required: true},
    }],
});

module.exports = mongoose.model('Users', User);

// unit tests
assert.typeOf(User, 'object');




//////////////////////////// PLEASE MAKE SURE EVERYTHING UNDER THIS LINE IS COMMENTED OUT, OR ELSE IT WONT RUN ////////////////////////////



// import mongoose from 'mongoose';

// const User =  mongoose.Schema({
//     name: {
//         type: String, 
//         required: true
//     },
//     email: {
//         type: String, 
//         required: true
//     },
//     password: {
//         type: String, 
//         required: true
//     },
    
    
// });

// module.exports = mongoose.model('Users', User);