const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
  status: {
    type: String,
    enum: ["applied", "accepted", "rejected"],
    default: "applied",
  },
  createdAt: { type: Date, default: Date.now },
});
// revised what's function
applicationSchema.index({ jobId: 1 });
applicationSchema.index({ userId: 1 });
applicationSchema.index({ status: 1 });

module.exports = mongoose.model("Application", applicationSchema);
