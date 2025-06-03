const express = require("express");
const ConnectDb = require("./config/db.config");
const dotenv = require("dotenv");

const userRoutes = require("./routes/user.route");
const jobRoutes = require("./routes/job.route");
const applicationRoutes = require("./routes/jobApplication.route");

dotenv.config();

ConnectDb();
const app = express();
app.use(express.json());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/jobs", jobRoutes);
app.use("/api/v1/applications", applicationRoutes);

app.get("/", (req, res) => {
  res.send("Job-portal Backend");
});

module.exports = app;
