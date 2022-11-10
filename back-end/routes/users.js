const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        res.json({ message: err });
    }
});

router.post('/', (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        major: req.body.major,
        year: req.body.year
    });
    user.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    });
});

// Specific Post
router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        res.json(user);
    } catch(err) {
        res.json({message: err});
    }   
});

// Delete Post
router.delete('/:userId', async (req, res) => {
    try {
        const removedUser = await User.remove({_id: req.params.userId});
        res.json(removedUser);
    } catch(err) {
        res.json({message: err});
    }
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
});

module.exports = router;