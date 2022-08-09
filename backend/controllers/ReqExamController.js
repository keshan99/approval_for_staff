const ReqExam = require("../models/ReqExamModel");
const mongoose = require("mongoose");

const attendanceDetails = [
  {
    batch: "E001",
    record: [
      {
        subject_ID: "AB1010",
        record: [
          {
            e_num: "2001e001",
            lec_attendance: "76",
            lab_attendance: "100",
          },
          {
            e_num: "2001e002",
            lec_attendance: "80",
            lab_attendance: "100",
          },
          {
            e_num: "2001e003",
            lec_attendance: "86",
            lab_attendance: "100",
          },
          {
            e_num: "2001e004",
            lec_attendance: "96",
            lab_attendance: "100",
          },
          {
            e_num: "2001e005",
            lec_attendance: "100",
            lab_attendance: "100",
          },
          {
            e_num: "2001e006",
            lec_attendance: "50",
            lab_attendance: "100",
          },
          {
            e_num: "2001e007",
            lec_attendance: "20",
            lab_attendance: "100",
          },
          {
            e_num: "2001e008",
            lec_attendance: "81",
            lab_attendance: "100",
          },
          {
            e_num: "2001e009",
            lec_attendance: "90",
            lab_attendance: "100",
          },
        ],
      },
      {
        subject_ID: "AB1020",
        record: [
          {
            e_num: "2001e001",
            lec_attendance: "76",
            lab_attendance: "100",
          },
          {
            e_num: "2001e002",
            lec_attendance: "80",
            lab_attendance: "100",
          },
          {
            e_num: "2001e003",
            lec_attendance: "86",
            lab_attendance: "100",
          },
          {
            e_num: "2001e004",
            lec_attendance: "96",
            lab_attendance: "100",
          },
          {
            e_num: "2001e005",
            lec_attendance: "100",
            lab_attendance: "100",
          },
          {
            e_num: "2001e006",
            lec_attendance: "50",
            lab_attendance: "100",
          },
          {
            e_num: "2001e007",
            lec_attendance: "20",
            lab_attendance: "100",
          },
          {
            e_num: "2001e008",
            lec_attendance: "81",
            lab_attendance: "100",
          },
          {
            e_num: "2001e009",
            lec_attendance: "90",
            lab_attendance: "100",
          },
        ],
      },
      {
        subject_ID: "AB1030",
        record: [
          {
            e_num: "2001e001",
            lec_attendance: "76",
            lab_attendance: "100",
          },
          {
            e_num: "2001e002",
            lec_attendance: "80",
            lab_attendance: "100",
          },
          {
            e_num: "2001e003",
            lec_attendance: "86",
            lab_attendance: "100",
          },
          {
            e_num: "2001e004",
            lec_attendance: "96",
            lab_attendance: "100",
          },
          {
            e_num: "2001e005",
            lec_attendance: "100",
            lab_attendance: "100",
          },
          {
            e_num: "2001e006",
            lec_attendance: "50",
            lab_attendance: "100",
          },
          {
            e_num: "2001e007",
            lec_attendance: "20",
            lab_attendance: "100",
          },
          {
            e_num: "2001e008",
            lec_attendance: "81",
            lab_attendance: "100",
          },
          {
            e_num: "2001e009",
            lec_attendance: "90",
            lab_attendance: "100",
          },
        ],
      },
      {
        subject_ID: "AB1040",
        record: [
          {
            e_num: "2001e001",
            lec_attendance: "76",
            lab_attendance: "100",
          },
          {
            e_num: "2001e002",
            lec_attendance: "80",
            lab_attendance: "100",
          },
          {
            e_num: "2001e003",
            lec_attendance: "86",
            lab_attendance: "100",
          },
          {
            e_num: "2001e004",
            lec_attendance: "96",
            lab_attendance: "100",
          },
          {
            e_num: "2001e005",
            lec_attendance: "100",
            lab_attendance: "100",
          },
          {
            e_num: "2001e006",
            lec_attendance: "50",
            lab_attendance: "100",
          },
          {
            e_num: "2001e007",
            lec_attendance: "20",
            lab_attendance: "100",
          },
          {
            e_num: "2001e008",
            lec_attendance: "81",
            lab_attendance: "100",
          },
          {
            e_num: "2001e009",
            lec_attendance: "90",
            lab_attendance: "100",
          },
        ],
      },
      {
        subject_ID: "AB1050",
        record: [
          {
            e_num: "2001e001",
            lec_attendance: "76",
            lab_attendance: "100",
          },
          {
            e_num: "2001e002",
            lec_attendance: "80",
            lab_attendance: "100",
          },
          {
            e_num: "2001e003",
            lec_attendance: "86",
            lab_attendance: "100",
          },
          {
            e_num: "2001e004",
            lec_attendance: "96",
            lab_attendance: "100",
          },
          {
            e_num: "2001e005",
            lec_attendance: "100",
            lab_attendance: "100",
          },
          {
            e_num: "2001e006",
            lec_attendance: "50",
            lab_attendance: "100",
          },
          {
            e_num: "2001e007",
            lec_attendance: "20",
            lab_attendance: "100",
          },
          {
            e_num: "2001e008",
            lec_attendance: "81",
            lab_attendance: "100",
          },
          {
            e_num: "2001e009",
            lec_attendance: "90",
            lab_attendance: "100",
          },
        ],
      },
      {
        subject_ID: "AB1060",
        record: [
          {
            e_num: "2001e001",
            lec_attendance: "76",
            lab_attendance: "100",
          },
          {
            e_num: "2001e002",
            lec_attendance: "80",
            lab_attendance: "100",
          },
          {
            e_num: "2001e003",
            lec_attendance: "86",
            lab_attendance: "100",
          },
          {
            e_num: "2001e004",
            lec_attendance: "96",
            lab_attendance: "100",
          },
          {
            e_num: "2001e005",
            lec_attendance: "100",
            lab_attendance: "100",
          },
          {
            e_num: "2001e006",
            lec_attendance: "50",
            lab_attendance: "100",
          },
          {
            e_num: "2001e007",
            lec_attendance: "20",
            lab_attendance: "100",
          },
          {
            e_num: "2001e008",
            lec_attendance: "81",
            lab_attendance: "100",
          },
          {
            e_num: "2001e009",
            lec_attendance: "90",
            lab_attendance: "100",
          },
        ],
      },
    ],
  },
];

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
    const lec_attendance = element.attendance;
    const lab_attendance = element.lab_attendance;
    const status = element.status;
    const academic_year = element.academic_year;
    const attempt = element.attempt;
    createOneReqExam(
      {
        body: {
          student_ID,
          academic_year,
          subject_ID,
          attendance,
          lab_attendance,
          status,
          attempt,
        },
      },
      res
    );

    //console.log(element);

    // req.body = { student_ID, subject_ID, lec_attendance, lab_attendance, accept };
    // //console.log(req.body);
    // createReqExam(req, res);
  });
  res.status(200).json({ ok: "ok" });
};

// create a new ReqExam
const createOneReqExam = async (req, res) => {
  //console.log(req.body);
  const {
    student_ID,
    academic_year,
    subject_ID,
    attendance,
    lab_attendance,
    status,
  } = req.body;
  const lec_attendance = attendance;
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
    return;
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

// insert multiple ReqExams to mongodb database
const insertMultipleReqExams = async (req, res) => {
  const { listExamReq } = req.body;
  if (!listExamReq) {
    return res.status(400).json({ error: "No ReqExams" });
  }
  try {
    //console.log(listExamReq);
    // const student_ID,
    // const academic_year,
    // const subject_ID,
    // const attempt,
    // const lec_attendance,
    // const lab_attendance,
    // const status

    // _id: 102,
    // subject_ID: 'AB1030',
    // subject_name: 'java',
    // deparment: 'computer',
    // corrdinator_email: 'amal@gmail.com',
    // semester: '1',
    // academic_year: '2018/19',
    // credit: '3',
    // status: 'not choose'

    let newExamReqList = [];

    //console.log(attendanceDetails[0].record);

    // loop for ckeak all examReq in listExamReq
    for (let i = 0; i < listExamReq.length; i++) {
      const examReq = listExamReq[i];

      //get student id from req.user.email
      const student_ID = req.user.email.split("@")[0];
      const academic_year = examReq.academic_year;
      const subject_ID = examReq.subject_ID;
      const attempt = 1;

      //console.log(attendanceDetails[0].record);

      //filet to get attendance from  attendanceDetails.record, using subject_ID and e_num
      const attendanceForSubject = attendanceDetails[0].record.filter(
        (recordd) => {
          return recordd.subject_ID == subject_ID;
          //console.log(recordd.subject_ID);
          //console.log("11111111", subject_ID);
        }
      );

      //get lec_attendance and lab_attendance from attendanceForSubject
      const attendanceD = attendanceForSubject[0].record.filter((record) => {
        return record.e_num === student_ID;
      });

      //console.log(attendanceD[0]);

      const attendance = attendanceD[0].lec_attendance;
      const lab_attendance = attendanceD[0].lab_attendance;
      const status = "Pending";

      //insert to newExamReqList
      newExamReqList.push({
        student_ID: student_ID,
        academic_year: academic_year,
        subject_ID: subject_ID,
        attempt: attempt,
        attendance: attendance,
        lab_attendance: lab_attendance,
        status: status,
      });
    }

    //console.log(newExamReqList);

    // const newReqExams = await ReqExam.insertMany({
    //   newExamReqList,
    // });

    const newReqExams = await ReqExam.create(newExamReqList);
    res.status(200).json(newReqExams);

    //res.status(200).json({ok: "ok"});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//change status of ReqExam
const changeEamReqStatus = async (req, res) => {
  const { id } = req.body;
  const { state } = req.body;
  console.log(id);
  console.log(state);
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "No such ReqExam" });
    }
    const reqExam = await ReqExam.findOneAndUpdate(
      { _id: id },
      {
        status:state,
      }
    );
    if (!reqExam) {
      return res.status(400).json({ error: "No such ReqExam" });
    }
    res.status(200).json({ ok: "ok" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getReqExams,
  getReqExam,
  createOneReqExam,
  deleteReqExam,
  updateReqExam,
  createReqExam_dummy,
  insertMultipleReqExams,
  changeEamReqStatus,
};
