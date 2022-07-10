const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SubjectSchema = new Schema(
  {
    subject_ID: {
      type: String,
      required: true,
    },
    coordinator_ID: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Subject", SubjectSchema);
