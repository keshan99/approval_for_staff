const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ReqExamSchema = new Schema(
  {
    student_ID: {
      type: String,
      required: true,
    },
    subject_ID: {
      type: String,
      required: true,
    },
    attendance: {
      type: Number,
      required: true,
    },
    lab_attendance: {
      type: Number,
      required: true,
    },
    accept: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ReqExam", ReqExamSchema);
