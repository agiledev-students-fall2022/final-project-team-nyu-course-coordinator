import mongoose from 'mongoose';


const Course = mongoose.Schema({
    name: {type: String, required: true},
    isRequired: {type: Boolean, required: true},
    isPrerqSat: {type: Boolean, required: true},
    sessions: [{
        section: {type: Number, required: true},
        prof: {type: String, required: true},
        day: {type: String, required: true},
        time: {type: Number, required: true},
        loc: {type: String, required :true},
        isConflicted:{type: Boolean, required: true}
        }]
});

// sample data:
// {
//     "name": "CS 111",
//     "isRequired": true,
//     "isPrerqSat": true,
//     "sessions": [
//         {
//             "section": 1,
//             "prof": "John Doe",
//             "day": "MWF",
//             "time": 1000,
//             "loc": "Bldg 1, Room 101",
//             "isConflicted": false
//         },
//         {
//             "section": 2,
//             "prof": "Jane Doe",
//             "day": "TR",
//             "time": 1000,
//             "loc": "Bldg 1, Room 102",
//             "isConflicted": false
//         }
//     ]
// }



module.exports = mongoose.model('Courses', Course);