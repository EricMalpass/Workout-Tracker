const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/Workout");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();

    return json[json.length - 1];
  },
  async addExercise(data) {
    const id = location.search.split("=")[1];

    const res = await fetch("/api/Workout/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
    console.log(data);
    const res = await fetch("/api/Workout", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutInRange() {
    const res = await fetch(`/api/Workout/range`);
    const json = await res.json();

    return json;
  },
};
