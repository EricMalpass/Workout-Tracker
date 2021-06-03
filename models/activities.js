const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const activitiesSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for the activity"
  },
  value: {
    type: Number,
    required: "Enter an amount of time"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Activity = mongoose.model("Activity", activitiesSchema);

module.exports = Activity;