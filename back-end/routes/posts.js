const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const Course = require('../models/Course');
const User = require('../models/User');

router.get('/', async (req, res) => {
// display all posts
    try {
        const posts = await Post.find();
        res.json(posts);
    }
    catch (err) {
        res.json({ message: err });
    }
});


router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: "got it!"});
    });
});



// Specific Post
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch(err) {
        res.json({message: err});
    }   
});

// Delete Post
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    } catch(err) {
        res.json({message: err});
    }
});

// Update Post
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId},
            {$set: {title: req.body.title}}
        );
        res.json(updatedPost);
    } catch(err) {
        res.json({message: err});
    }
});

module.exports = router;
