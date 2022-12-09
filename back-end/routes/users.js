const express = require('express');
const router = express.Router();
const cors = require('cors');

const app = express()
app.use(cors())

const chai = require('chai');
const expect = chai.expect;
const {body, validationResult} = require('express-validator')

const User = require('../models/User');

// get all the users --> get specified user by id
router.get('/:userId', async (req, res) => {
    const userId= req.params.userId
    
    try {
        
        const user = await User.find({_id: userId}).exec()
        // console.log("USER!",user)
        
        const data = user.map(u => {
            return {id: u._id, name: u.name, email:u.email, 
                classes: u.classes.map (c => {
                    return{section_id: c.section_id}
            })}
        })
        // console.log("DATA",data)
        res.json(data);
        
    }
    catch (err) {
        res.json({ message: err });
    }
});

// create new user
router.post('/', 
    body('name').notEmpty().isString(),
    body('email').isEmail(),
    body('major').notEmpty(),
    body('year').notEmpty(),
    body('classes').notEmpty(),
    (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }

        console.log('sign up user')
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            major: req.body.major,
            year: req.body.year,
            classes: req.body.classes
        })
        user.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err});
        });
});

// get a specific user
router.get('/:userId', async (req, res) => {
    console.log(req.params.userId);
    try {
        const user = await User.findById(req.params.userId);
        res.json(user);
    } catch(err) {
        res.json({message: err});
    }  
});

// delete a specific user
router.delete('/:userId', async (req, res) => {
    try {
        const removedUser = await User.remove({_id: req.params.userId});
        res.json(removedUser);
    } catch(err) {
        res.json({message: err});
    };
});

// update an existing user
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

const signin = require('../controllers/user.js');
const signup = require('../controllers/user.js');

router.post('/signin', 
    signin.signin);
router.post('/signup', 
    signup.signup);


module.exports = router;