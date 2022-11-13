const cors= require('cors');
const express = require('express');
const app= express()
const router = express.Router();
const mongoose = require('mongoose');
require('../models/Course');
const Course = mongoose.model('Course')
app.use(cors())
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;


router.get('/', async (req, res) => {
    console.log("server reached")
    try {
        const courses = await Course.find({}).exec()
        const data = courses.map(c => {
            return {name: c.name, isRequired: c.isRequired, sessions: c.sessions.map(s => {
                return{section: s.section, prof: s.prof, day:s.day, time: s.time, time2:s.time2, loc:s.loc }
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
    assert.typeOf(course, 'object');
    assert.typeOf(course.name, 'string');
});

// Delete Post
router.delete('/:courseId', async (req, res) => {
    try {
        const removedCourse = await Course.remove({_id: req.params.courseId});
        res.json(removedCourse);
    } catch(err) {
        res.json({message: err});
    }
    assert.equal(removedCourse.isRemoved, true);
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
    assert.equal(updatedCourse.n, 1); 
});

// other unit tests
assert.typeOf(router, 'function', 'router is a function');
assert.typeOf(router.get, 'function', 'router.get is a function');
assert.typeOf(router.post, 'function', 'router.post is a function');
assert.typeOf(router.get('/:courseId'), 'function', 'router.get is a function');
assert.typeOf(router.delete('/:courseId'), 'function', 'router.delete is a function');
assert.typeOf(router.patch('/:courseId'), 'function', 'router.patch is a function');




module.exports = router;
