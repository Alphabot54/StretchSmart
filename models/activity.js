const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    distance: {
        type: Number,
        required: true
    },
    pace: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, { _id: false});

module.exports = activitySchema;