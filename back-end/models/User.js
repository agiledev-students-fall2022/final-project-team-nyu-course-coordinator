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
    password: {
        type: String, 
        required: true
    },
    courses: {
        name: {type: String, required: true},
        isRequired: {type: Boolean, required: true},
        sessions: [{
            section: {type: Number, required: true},
            prof: {type: String, required: true},
            day: [{ 
              type: String, 
              required: true 
            }],
            time: {type: String, required: true},
            time2: {type: Number, required: true},
            loc: {type: String, required :true},
            }]
    }
}, {
    _id: true
});

module.exports = mongoose.model('Users', User);