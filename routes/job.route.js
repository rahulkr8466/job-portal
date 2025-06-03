const express = require("express");
const {
  createJob,
  getJobs,
  getJob,
  updateJob,
  deleteJob,
} = require("../controllers/job.controller");

const router = express.Router();

router.route("/").post(createJob).get(getJobs);

router.route("/:id").get(getJob).put(updateJob).delete(deleteJob);

module.exports = router;
