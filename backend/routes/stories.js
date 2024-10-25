const express = require('express');
const Story = require('../models/Story');

const router = express.Router();

// Post a story
router.post('/', async (req, res) => {
    const { title, content, author, psychologyBranch } = req.body;
    const story = new Story({ title, content, author, psychologyBranch });
    await story.save();
    res.status(201).json(story);
});

// Get all stories
router.get('/', async (req, res) => {
    const stories = await Story.find().populate('author', 'username');
    res.json(stories);
});

module.exports = router;
