const ReqExam = require("../models/ReqExamModel");
const mongoose = require("mongoose");

// get all ReqExams
const getReqExams = async (req, res) => {
  const ReqExams = await ReqExam.find({}).sort({ createdAt: -1 });

  res.status(200).json(ReqExams);
};

// get a single ReqExam
const getReqExam = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such ReqExam" });
  }

  const ReqExam = await ReqExam.findById(id);

  if (!ReqExam) {
    return res.status(404).json({ error: "No such ReqExam" });
  }

  res.status(200).json(ReqExam);
};

//input dummy data
const createReqExam_dummy = async (req, res) => {
  listdummy = [
    {
      student_ID: "2001e001",
      subject_ID: "AB1001",
      attendance: 0.8,
      lab_attendance: 1.0,
      accept: "pending",
    },
    {
      student_ID: "2001e001",
      subject_ID: "AB1002",
      attendance: 0.8,
      lab_attendance: 1.0,
      accept: "pending",
    },
    {
      student_ID: "2001e001",
      subject_ID: "AB1003",
      attendance: 0.8,
      lab_attendance: 1.0,
      accept: "pending",
    },
    {
      student_ID: "2001e002",
      subject_ID: "AB1001",
      attendance: 0.8,
      lab_attendance: 1.0,
      accept: "pending",
    },
    {
      student_ID: "2001e002",
      subject_ID: "AB1002",
      attendance: 0.8,
      lab_attendance: 1.0,
      accept: "pending",
    },
    {
      student_ID: "2001e002",
      subject_ID: "AB1003",
      attendance: 0.8,
      lab_attendance: 1.0,
      accept: "pending",
    },
    {
      student_ID: "2001e003",
      subject_ID: "AB1001",
      attendance: 0.8,
      lab_attendance: 1.0,
      accept: "pending",
    },
    {
      student_ID: "2001e003",
      subject_ID: "AB1002",
      attendance: 0.8,
      lab_attendance: 1.0,
      accept: "pending",
    },
    {
      student_ID: "2001e003",
      subject_ID: "AB1003",
      attendance: 0.8,
      lab_attendance: 1.0,
      accept: "pending",
    },
    {
      student_ID: "2001e004",
      subject_ID: "AB1001",
      attendance: 0.8,
      lab_attendance: 1.0,
      accept: "pending",
    },
    {
      student_ID: "2001e004",
      subject_ID: "AB1002",
      attendance: 0.8,
      lab_attendance: 1.0,
      accept: "pending",
    },
    {
      student_ID: "2001e004",
      subject_ID: "AB1003",
      attendance: 0.8,
      lab_attendance: 1.0,
      accept: "pending",
    },
    {
      student_ID: "2001e005",
      subject_ID: "AB1001",
      attendance: 0.8,
      lab_attendance: 1.0,
      accept: "pending",
    },
    {
      student_ID: "2001e005",
      subject_ID: "AB1002",
      attendance: 0.8,
      lab_attendance: 1.0,
      accept: "pending",
    },
    {
      student_ID: "2001e005",
      subject_ID: "AB1003",
      attendance: 0.8,
      lab_attendance: 1.0,
      accept: "pending",
    },
  ];
  listdummy.forEach((element) => {
    const student_ID = element.student_ID;
    const subject_ID = element.subject_ID;
    const attendance = element.attendance;
    const lab_attendance = element.lab_attendance;
    const accept = element.accept;

    req.body = { student_ID, subject_ID, attendance, lab_attendance, accept };
    //console.log(req.body);
    createReqExam(req, res);
  });
  res.status(200).json(ReqExam);
};

// create a new ReqExam
const createReqExam = async (req, res) => {
  console.log(req.body);
  const { student_ID, subject_ID, attendance, lab_attendance, accept } =
    req.body;

  let emptyFields = [];

  if (!student_ID) {
    emptyFields.push("student_ID");
  }
  if (!subject_ID) {
    emptyFields.push("subject_ID");
  }
  if (!attendance) {
    emptyFields.push("attendance");
  }
  if (!lab_attendance) {
    emptyFields.push("lab_attendance");
  }
  if (!accept) {
    emptyFields.push("accept");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }

  // add to the database
  try {
    const reqExam = await ReqExam.create({
      student_ID,
      subject_ID,
      attendance,
      lab_attendance,
      accept,
    });
    //res.status(200).json(ReqExam);
    return
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a ReqExam
const deleteReqExam = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such ReqExam" });
  }

  const ReqExam = await ReqExam.findOneAndDelete({ _id: id });

  if (!ReqExam) {
    return res.status(400).json({ error: "No such ReqExam" });
  }

  res.status(200).json(ReqExam);
};

// update a ReqExam
const updateReqExam = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such ReqExam" });
  }

  const ReqExam = await ReqExam.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!ReqExam) {
    return res.status(400).json({ error: "No such ReqExam" });
  }

  res.status(200).json(ReqExam);
};

module.exports = {
  getReqExams,
  getReqExam,
  createReqExam,
  deleteReqExam,
  updateReqExam,
  createReqExam_dummy,
};
