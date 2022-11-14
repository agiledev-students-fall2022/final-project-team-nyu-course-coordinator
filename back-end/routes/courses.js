const cors= require('cors');
const express = require('express');
const app= express()
const router = express.Router();
const mongoose = require('mongoose');
require('../models/Course');
const Course = mongoose.model('Course')
require('../models/User');
const User = mongoose.model('User')
app.use(cors())
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;


router.get('/', async (req, res) => {
    console.log("server reached")
    try {
        const courses = await Course.find({}).exec()
        const data = courses.map(c => {
            return {id: c._id, name: c.name, isRequired: c.isRequired, sessions: c.sessions.map(s => {
                return{id: s._id, section: s.section, prof: s.prof, day:s.day, time: s.time, time2:s.time2, loc:s.loc }
            })}
        })
        res.json(data)
    }
    catch (err) {
        res.json({ message: err });
    }
});

router.post('/', (req, res) => {
    const course = new Course({
        name: req.body.name,
        isRequired: req.body.isRequired,
        isPrerqSat: req.body.isPrerqSat,
        sessions: req.body.sessions
    });
    course.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    });
});

// Specific Post
router.get('/:courseId', async (req, res) => {
    try {
        const course = await Course.findById(req.params.courseId);
        res.json(course);
    } catch(err) {
        res.json({message: err});
    }   
});

// Delete Post
router.delete('/:courseId', async (req, res) => {
    try {
        const removedCourse = await Course.remove({_id: req.params.courseId});
        res.json(removedCourse);    
    } catch(err) {
        res.json({message: err});
    }
});


// Update Post
// router.patch('/:courseId', async (req, res) => {
//     console.log("Trying to add...")
//     // const user= req.params.userID
//     const sectionId= req.params.courseId
    
//     try {
//         const addingCourse = await Course.find({'sessions.prof':"Amanda Steigman"},{
//             'sessions._id':1,
//             'sessions.section':1,
//             'sessions.prof':1,
//             'sessions.day':1,
//             'sessions.time':1,
//             'sessions.time2':1,
//             'sessions.loc':1,
//         }).exec()
        
//         const sections = addingCourse[0].sessions
//         const addingSection= sections.filter(section => section._id==sectionId)
//         const addingSectionId = {section_id: addingSection[0]._id.toString()} // an object to add to the array of user.classes
        
//         // later with userID, find one user with that ID instead of retrieving all users
//         const users = await User.find({}).exec()
//         const schedule = users[0].classes //the array of user.classes
//         schedule.push(addingSectionId) // updated array of user.classes
//         console.log(schedule)

//         // trying to update existing user.classes but DONT KNOW how to
//         // so attempting to delete the field and add back with new array
//         await User.updateOne({_id: ObjectId("636ed77cfe63d7bf6b544a93")},{$unset:{"classes":''}})
//         await User.updateOne({'_id': ObjectId("636ed77cfe63d7bf6b544a93")},{$set:{"classes":schedule}})
        
//         // console.log(user[0].classes)
//         // const schedule = await user[0]
//         // {_id: req.params.courseId},
//         // {$set: {name: req.body.name}}
//         // res.json(updatedCourse);
//     } catch(err) {
//         res.json({message: err});
//     }
// });

router.patch('/:CourseId', async (req, res) => {
    try {
        const updatedCourse = await Course.updateOne(
            {_id: req.params.CourseId},
            {$set: {name: req.body.name}}
        );
        const data = courses.map(c => {
            return {id: c._id, name: c.name, isRequired: c.isRequired, sessions: c.sessions.map(s => {
                return{id: s._id, section: s.section, prof: s.prof, day:s.day, time: s.time, time2:s.time2, loc:s.loc }
            })}
        })
        res.json(data);
    } catch(err) {
        res.json({message: err});
    }
});

// router.patch('/:CourseId', async (req, res) => {
//     try {
//         const updatedUser = await User.updateOne(
//             {_id: req.params.userId},
//             {$set: {name: req.body.name}}
//         );
//         assert.typeOf(updatedUser, 'object');
//         res.json(updatedUser);
//     } catch(err) {
//         res.json({message: err});
//     }
// });

// other unit tests
// assert.typeOf(router, 'function', 'router is a function');
// assert.typeOf(router.get, 'function', 'router.get is a function');
// assert.typeOf(router.post, 'function', 'router.post is a function');
// assert.typeOf(router.get('/:courseId'), 'function', 'router.get is a function');
// assert.typeOf(router.delete('/:courseId'), 'function', 'router.delete is a function');
// assert.typeOf(router.patch('/:courseId'), 'function', 'router.patch is a function');




module.exports = router;
