const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercise: [
        {
          type: Schema.Types.ObjectId,
          ref: "exercise"
        }
      ]

}, { toJSON: { virtuals: true } });

workoutSchema.set('toObject', { virtuals: true });

workoutSchema.virtual('totalDuration').get(function() {
  workout.find({}).populate('exercise')
  let totalDuration = this.exercise.reduce(function(prev, cur) {
    return prev + cur.duration;
  }, 0);
  return totalDuration;
});

const workout = mongoose.model("Workout", workoutSchema);

module.exports = workout;