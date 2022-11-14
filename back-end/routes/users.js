const express = require('express');
const router = express.Router();
const cors = require('cors');

const app = express()
app.use(cors())

const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const User = require('../models/User');

router.get('/', async (req, res) => {
    console.log('get users');
    try {
        const users = await User.find({}).exec()
        const data = users.map(u => {
            return {id: u._id, name: u.name, email:u.email, major: u.major, year: u.year, 
                classes: u.classes.map (c => {
                    return{section_id: c.section_id}
                })}
            })
            console.log(data[0].classes[0].class_id)
            res.json(data);
    }
    catch (err) {
        res.json({ message: err });
    }
    // assert.typeOf(users, 'object');
    // assert.typeOf(users.name, 'string');
    // assert.typeOf(users.email, 'string');
    // assert.typeOf(users.major, 'string');
    // assert.typeOf(users.year, 'number');
    // assert.typeOf(users.classes, 'object');
    // assert.typeOf(users.classes.class_id, 'string');
    // assert.typeOf(users.classes.section_num, 'number');
});

router.post('/', (req, res) => {
    console.log('post user');
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        major: req.body.major,
        year: req.body.year,
        classes: req.body.classes
    });
    user.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    });
    // assert.typeOf(user, 'object');
});

// Specific Post
router.get('/:userId', async (req, res) => {
    console.log(req.params.userId);
    try {
        const user = await User.findById(req.params.userId);
        res.json(user);
    } catch(err) {
        res.json({message: err});
    }   
    // assert.typeOf(user, 'object');
});

// Delete Post
router.delete('/:userId', async (req, res) => {
    try {
        const removedUser = await User.remove({_id: req.params.userId});
        res.json(removedUser);
    } catch(err) {
        res.json({message: err});
    }
    // assert.typeOf(removedUser, 'object');
    // assert.typeOf(removedUser.name, 'string');
});

// Update Post
router.patch('/:userId', async (req, res) => {
    try {
        const updatedUser = await User.updateOne(
            {_id: req.params.userId},
            {$set: {name: req.body.name}}
        );
        res.json(updatedUser);
    } catch(err) {
        res.json({message: err});
    }
    // assert.typeOf(updatedUser, 'object');
});

// other unit tests
// assert.typeOf(router, 'function', 'router is a function');
// assert.typeOf(router.get, 'function', 'router.get is a function');
// assert.typeOf(router.post, 'function', 'router.post is a function');
// assert.typeOf(router.get('/:userId'), 'function', 'router.get is a function');
// assert.typeOf(router.delete('/:userId'), 'function', 'router.delete is a function');
// assert.typeOf(router.patch('/:userId'), 'function', 'router.patch is a function');


module.exports = router;