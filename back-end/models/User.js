const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    major: {type: String, required: true},
    year: {type: Number, required: true},
    classes: [{
        section_id: {type: String, required: true},
    }],
});

module.exports = mongoose.model('User', User);






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