const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exercise = require("./exercise");

const resistanceSchema = new Schema({
    weight: {
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true 
            },
    sets: {
        type: Number,
        required: true
    }
});

const resistance = exercise.discriminator('resistance', resistanceSchema);

module.exports = resistance;