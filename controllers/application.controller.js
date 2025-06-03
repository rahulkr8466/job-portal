const Application = require("../models/application.model");

exports.createApplication = async (req, res) => {
  try {
    const application = await Application.create(req.body);
    res.status(201).json(application);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getApplications = async (req, res) => {
  const { status } = req.query;
  const queryFn = () =>
    Application.find(status ? { status } : {}).populate("userId jobId");
  const applications = await performanceLogger(
    queryFn,
    "Get Applications Query"
  );
  res.json(applications);
};

exports.getApplication = async (req, res) => {
  const application = await Application.findById(req.params.id).populate(
    "userId jobId"
  );
  if (!application)
    return res.status(404).json({ error: "Application not found" });
  res.json(application);
};

exports.updateApplication = async (req, res) => {
  const application = await Application.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (!application)
    return res.status(404).json({ error: "Application not found" });
  res.json(application);
};

exports.deleteApplication = async (req, res) => {
  const application = await Application.findByIdAndDelete(req.params.id);
  if (!application)
    return res.status(404).json({ error: "Application not found" });
  res.json({ message: "Application deleted" });
};
