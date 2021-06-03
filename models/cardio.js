const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exercise = require("./exercise");

const cardioSchema = new Schema({
    distance: {
        type: Number,
        required: true,
    }
});

const cardio = exercise.discriminator('cardio', cardioSchema);

module.exports = cardio;