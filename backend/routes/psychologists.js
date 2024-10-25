const express = require('express');
const bcrypt = require('bcryptjs');
const Psychologist = require('../models/Psychologist');

const router = express.Router();

// Register psychologist
router.post('/register', async (req, res) => {
    const { username, password, credentials, residence, office, price } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const psychologist = new Psychologist({ username, password: hashedPassword, credentials, residence, office, price });
    await psychologist.save();
    res.status(201).json({ message: 'Psychologist registered successfully!' });
});

// Psychologist login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const psychologist = await Psychologist.findOne({ username });
    if (psychologist && (await bcrypt.compare(password, psychologist.password))) {
        res.json({ message: 'Logged in successfully' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

module.exports = router;
