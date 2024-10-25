const mongoose = require('mongoose');

const PsychologistSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    credentials: { type: String, required: true },
    residence: { type: String, required: true },
    office: { type: String },
    price: { type: Number },
});

module.exports = mongoose.model('Psychologist', PsychologistSchema);
