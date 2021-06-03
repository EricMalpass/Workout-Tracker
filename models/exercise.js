const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
});

const exercise = mongoose.model("exercise", exerciseSchema);

module.exports = exercise;