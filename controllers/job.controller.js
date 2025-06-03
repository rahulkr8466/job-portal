const Job = require("../models/job.model");

exports.createJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json(job);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getJobs = async (req, res) => {
  const jobs = await Job.find().populate("postedBy", "name email");
  res.json(jobs);
};

exports.getJob = async (req, res) => {
  const job = await Job.findById(req.params.id).populate(
    "postedBy",
    "name email"
  );
  if (!job) return res.status(404).json({ error: "Job not found" });
  res.json(job);
};

exports.updateJob = async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!job) return res.status(404).json({ error: "Job not found" });
  res.json(job);
};

exports.deleteJob = async (req, res) => {
  const job = await Job.findByIdAndDelete(req.params.id);
  if (!job) return res.status(404).json({ error: "Job not found" });
  res.json({ message: "Job deleted" });
};
