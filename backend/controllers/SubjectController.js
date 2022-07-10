const Subject = require("../models/SubjectModel");
const mongoose = require("mongoose");

// get all Subjects
const getSubjects = async (req, res) => {
  const Subjects = await Subject.find({}).sort({ createdAt: -1 });

  res.status(200).json(Subjects);
};

// get a single Subject
const getSubject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Subject" });
  }

  const Subject = await Subject.findById(id);

  if (!Subject) {
    return res.status(404).json({ error: "No such Subject" });
  }

  res.status(200).json(Subject);
};


// create a new Subject
const createSubject = async (req, res) => {
  console.log(req.body);
  const { subject_ID, coordinator_ID } =
    req.body;

  let emptyFields = [];

  if (!subject_ID) {
    emptyFields.push("subject_ID");
  }
  if (!coordinator_ID) {
    emptyFields.push("coordinator_ID");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }

  // add to the database
  try {
    const subject = await Subject.create({
      subject_ID,
      coordinator_ID,
    });
    res.status(200).json(subject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a Subject
const deleteSubject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such Subject" });
  }

  const Subject = await Subject.findOneAndDelete({ _id: id });

  if (!Subject) {
    return res.status(400).json({ error: "No such Subject" });
  }

  res.status(200).json(Subject);
};

// update a Subject
const updateSubject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such Subject" });
  }

  const Subject = await Subject.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!Subject) {
    return res.status(400).json({ error: "No such Subject" });
  }

  res.status(200).json(Subject);
};

module.exports = {
  getSubjects,
  getSubject,
  createSubject,
  deleteSubject,
  updateSubject,
};
