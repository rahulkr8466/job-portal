const mongoose = require("mongoose");
const dotenv = require("dotenv");
const faker = require("faker");
const Job = require("../models/job.model");
const User = require("../models/user.model");

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

const generateJobs = async () => {
  await Job.deleteMany();
  const employers = await User.find({ role: "employer" });

  if (!employers.length) {
    console.error(" No employers found. Please generate users first.");
    process.exit();
  }

  const jobs = [];
  for (let i = 0; i < 1000; i++) {
    const employer = employers[Math.floor(Math.random() * employers.length)];
    jobs.push({
      title: faker.name.jobTitle(),
      description: faker.lorem.paragraph(),
      company: faker.company.companyName(),
      location: faker.address.city(),
      postedBy: employer._id,
    });
  }

  await Job.insertMany(jobs);
  console.log(" Dummy jobs generated!");
  process.exit();
};

generateJobs();
