const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.get('/', async (req, res) => {
    console.log('get users');
    try {
        const users = await User.find({}).exec()
        const data = users.map(u => {
            return {name: u.name, email:u.email, major: u.major, year: u.year, 
                classes: u.classes.map (c => {
                    return{class_id: u.class_id, section_num: u.section_num}
                })}
            })
            console.log(users)
            res.json(users);
    }
    catch (err) {
        res.json({ message: err });
    }
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