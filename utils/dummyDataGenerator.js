const mongoose = require("mongoose");
const dotenv = require("dotenv");
const faker = require("faker");

const User = require("../models/user.model");
const Job = require("../models/job.model");
const Application = require("../models/application.model");

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const generateDummyData = async () => {
  await Application.deleteMany();

  // Get all users and jobs
  const users = await User.find();
  const jobs = await Job.find();
  if (!users.length || !jobs.length) {
    console.error(" No users or jobs found. Please generate them first.");
    return process.exit(1);
  }

  const applications = [];
  for (let i = 0; i < 10000; i++) {
    const user = users[Math.floor(Math.random() * users.length)];
    const job = jobs[Math.floor(Math.random() * jobs.length)];
    const status = ["applied", "accepted", "rejected"][
      Math.floor(Math.random() * 3)
    ];

    applications.push({
      userId: user._id,
      jobId: job._id,
      status,
    });
  }

  await Application.insertMany(applications);
  console.log("Dummy data generated!");
  process.exit();
};

generateDummyData();
