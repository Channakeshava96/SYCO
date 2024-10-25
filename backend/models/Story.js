const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true, minlength: 200 },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    psychologyBranch: { type: String },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Story', StorySchema);
