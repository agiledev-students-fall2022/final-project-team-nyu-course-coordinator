const cors= require('cors');
const express = require('express');
const app= express()
const router = express.Router();
const mongoose = require('mongoose');
require('../models/Course');
const Course = mongoose.model('Course')
app.use(cors())


router.get('/', async (req, res) => {
    console.log("THE server")
    try {
        const courses = await Course.find({}).exec()
        console.log(courses)
        res.json(courses)
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
router.patch('/:courseId', async (req, res) => {
    try {
        const updatedCourse = await Course.updateOne(
            {_id: req.params.courseId},
            {$set: {name: req.body.name}}
        );
        res.json(updatedCourse);
    } catch(err) {
        res.json({message: err});
    }
});

module.exports = router;
