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

// get all courses
router.get('/', async (req, res) => {
    console.log("server reached")
    try {
        const courses = await Course.find({}).exec()
        const data = courses.map(c => {
            return {id: c._id, name: c.name, isRequired: c.isRequired, prereqs: c.prereqs, sessions: c.sessions.map(s => {
                return{id: s._id, section: s.section, prof: s.prof, day:s.day, time: s.time, time2:s.time2, loc:s.loc }
            })}
        })
        console.log(data)
        res.json(data)
    }
    catch (err) {
        res.json({ message: err });
    }
});

// add a new course
router.post('/', (req, res) => {
    const course = new Course({
        name: req.body.name,
        isRequired: req.body.isRequired,
        prereqs: req.body.prereqs,
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

// get a specific course based on id
router.get('/:courseId', async (req, res) => {
    try {
        const course = await Course.findById(req.params.courseId);
        res.json(course);
    } catch(err) {
        res.json({message: err});
    }   
});

// update an existing course
router.patch('/:courseId', async (req, res) => {
    console.log("Trying to add...")
    // const user= req.params.userID
    const sectionId= req.params.courseId
    
    try {
        
        const addingSection= {section_id: sectionId} // an object to add to the array of user.classes
       
        // later with userID, find one user with that ID instead of retrieving all users
        const users = await User.find({}).exec()
        const schedule = users[0].classes //the array of user.classes
        schedule.push(addingSection) // updated array of user.classes
        
        const updatedSchedule= await User.updateOne({_id: users[0]._id},{$set:{"classes":schedule}})
        
        res.json(updatedSchedule);
    } catch(err) {
        res.json({message: err});
    }
});


// delete a course from a user's schedule
router.delete('/:courseId', async (req, res) => {
    console.log("Trying to delete...")
    // const user= req.params.userID
    const sectionId= req.params.courseId
    
    try {
        
        const removingSection= {section_id: sectionId} // an object to add to the array of user.classes
       
        // later with userID, find one user with that ID instead of retrieving all users
        const users = await User.find({}).exec()
        const schedule = users[0].classes //the array of user.classes
        console.log(schedule)
        // traverse the array and find the index of the object to remove
        for (let i=0; i<schedule.length; i++){
            if (schedule[i].section_id===sectionId){
                schedule.splice(i,1)
            }
        }
        const updatedSchedule= await User.updateOne({_id: users[0]._id},{$set:{"classes":schedule}})
        
        res.json(updatedSchedule);
    } catch(err) {
        res.json({message: err});
    }
});

module.exports = router;
