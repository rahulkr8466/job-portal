const mongoose = require("mongoose");
const dotenv = require("dotenv");
const faker = require("faker");

const User = require("../models/user.model");

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const roles = ["employer", "jobseeker"];

const generateUsers = async () => {
  try {
    await User.deleteMany(); // optional: clean slate

    const users = [];

    for (let i = 0; i < 100; i++) {
      users.push({
        fullname: {
          firstname: faker.name.firstName(),
          lastname: faker.name.lastName(),
        },
        email: faker.internet.email(),
        password: "password123", // for demo purposes only (no hashing here)
        role: roles[Math.floor(Math.random() * roles.length)],
      });
    }

    await User.insertMany(users);
    console.log("1000 dummy users inserted!");
  } catch (err) {
    console.error(" Error generating users:", err);
  } finally {
    mongoose.connection.close();
  }
};

generateUsers();
