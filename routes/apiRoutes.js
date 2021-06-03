const db = require("../models");

module.exports = function(app) {
    app.get("/api/workout", (req, res) => {
        db.Workout.find({}).sort({ _id: -1 }).limit(10)
            .populate("exercise")
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.put("/api/workout/:id", (req, res) => {
        if (req.body.type === "cardio") {
            db.cardio.create(req.body)
                .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { exercise: _id } }, { new: true }))
                .then(dbWorkout => {
                    res.json(dbWorkout);
                })
                .catch(err => {
                    res.json(err);
                });
        } else if (req.body.type === "resistance") {
            db.resistance.create(req.body)
                .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { exercise: _id } }, { new: true }))
                .then(dbWorkout => {
                    res.json(dbWorkout);
                })
                .catch(err => {
                    res.json(err);
                });
        } else {
            throw new Error("pick a workout");
        };
    });

    app.post("/api/workout", (req, res) => {
        db.workout.create(req.body)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/api/workout/range", (req, res) => {
        db.Workout.find({})
            .populate("exercise")
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });
}