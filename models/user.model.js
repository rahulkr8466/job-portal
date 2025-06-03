const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minLength: [3, "Name must at three characters Long"],
    },
    lastname: {
      type: String,
      minLength: [3, "Lastname must be atleast three characters"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: [5, "Email mustbe atleast 5 characters"],
  },
  password: {
    type: String,
    required: true,
    // unique: true,
    select: false,
  },
  role: {
    type: String,
    enum: ["employer", "jobseeker"],
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
