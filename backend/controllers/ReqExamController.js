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

  const reqExam = await ReqExam.findById(id);

  if (!reqExam) {
    return res.status(404).json({ error: "No such ReqExam" });
  }

  res.status(200).json(reqExam);
};

//input dummy data
const createReqExam_dummy = async (req, res) => {
  listdummy = [

    {
      student_ID: "2001e002",
      academic_year: "E01",
      subject_ID: "AB1040",
      attempt: 1,
      attendance: 80,
      lab_attendance: 100,
      status: "Pending",
    },
    {
      student_ID: "2001e004",
      academic_year: "E01",
      subject_ID: "AB1040",
      attempt: 1,
      attendance: 50,
      lab_attendance: 60,
      status: "Not Approved",
    },
  ];
  listdummy.forEach((element) => {
    const student_ID = element.student_ID;
    const subject_ID = element.subject_ID;
    const attendance = element.attendance;
    const lab_attendance = element.lab_attendance;
    const status = element.status;
    const academic_year = element.academic_year;
    const attempt = element.attempt;
    createReqExam({ body: { student_ID, academic_year, subject_ID, attendance, lab_attendance, status, attempt } }, res);

    console.log(element);

    // req.body = { student_ID, subject_ID, attendance, lab_attendance, accept };
    // //console.log(req.body);
    // createReqExam(req, res);
  });
  res.status(200).json({ok: "ok"});
};

// create a new ReqExam
const createReqExam = async (req, res) => {
  //console.log(req.body);
  const { student_ID,academic_year, subject_ID, attendance, lab_attendance, status } =
    req.body;
  
  const attempt = 1;

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
  if (!status) {
    emptyFields.push("status");
  }
  if (!academic_year) {
    emptyFields.push("academic_year");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }

    
  // add to the database
  try {
    var reqExam = "";
    if (req.body.id) {
      const _id = mongoose.Types.ObjectId(req.body.id);
      reqExam = await ReqExam.create({
        _id,
        student_ID,
        academic_year,
        subject_ID,
        attempt,
        attendance,
        lab_attendance,
        status,
      });
    } else {
      reqExam = await ReqExam.create({
        student_ID,
        academic_year,
        subject_ID,
        attempt,
        attendance,
        lab_attendance,
        status,
      });
    }
   
    res.status(200).json(reqExam);
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

  const reqExam = await ReqExam.findOneAndDelete({ _id: id });

  if (!reqExam) {
    return res.status(400).json({ error: "No such ReqExam" });
  }

  res.status(200).json(reqExam);
};

// update a ReqExam
const updateReqExam = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such ReqExam" });
  }

  const reqExam = await ReqExam.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!reqExam) {
    return res.status(400).json({ error: "No such ReqExam" });
  }

  res.status(200).json(reqExam);
};

module.exports = {
  getReqExams,
  getReqExam,
  createReqExam,
  deleteReqExam,
  updateReqExam,
  createReqExam_dummy
};
