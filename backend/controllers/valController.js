const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const ReqExam = require("../models/ReqExamModel");
const subject = [
  {
    subject_ID: "AB1011",
    subject_name: "C++",
    deparment: "computer",
    corrdinator_email: "amal@gmail.com",
    semester: "1",
  },
  {
    subject_ID: "AB1020",
    subject_name: "second subject",
    deparment: "computer",
    corrdinator_email: "isuru@gmail.com",
    semester: "1",
  },
  {
    subject_ID: "AB1030",
    subject_name: "third subject",
    deparment: "computer",
    corrdinator_email: "amal@gmail.com",
    semester: "1",
  },
  {
    subject_ID: "AB1040",
    subject_name: "fourth subject",
    deparment: "computer",
    corrdinator_email: "isuru@gmail.com",
    semester: "1",
  },
  {
    subject_ID: "AB1050",
    subject_name: "fifth subject",
    deparment: "computer",
    corrdinator_email: "amal@gmail.com",
    semester: "1",
  },
  {
    subject_ID: "AB1060",
    subject_name: "sixth subject",
    deparment: "computer",
    corrdinator_email: "channa@gmail.com",
    semester: "1",
  },
];

// crete json object for student data
const student = [
  {
    e_num: "2001e001",
    current_batch: "E01",
  },
  {
    e_num: "2001e002",
    current_batch: "E01",
  },
  {
    e_num: "2001e003",
    current_batch: "E01",
  },
  {
    e_num: "2001e004",
    current_batch: "E01",
  },
  {
    e_num: "2001e005",
    current_batch: "E01",
  },
  {
    e_num: "2001e006",
    current_batch: "E01",
  },
  {
    e_num: "2001e007",
    current_batch: "E01",
  },
  {
    e_num: "2001e008",
    current_batch: "E01",
  },
  {
    e_num: "2001e009",
    current_batch: "E01",
  },
];
// create json object for teacher data
const teacher = [
  {
    email: "amal@gmail.com",
    student_e_num: ["2001e001", "2001e002", "2001e003"],
  },
  {
    email: "isuru@gmail.com",
    student_e_num: ["2001e004", "2001e005", "2001e006"],
  },
  {
    email: "channa@gmail.com",
    student_e_num: ["2001e007", "2001e008", "2001e009"],
  },
];
// login a user
const getUserState = async (req, res) => {
  //   const {email, password} = req.body

  //   try {
  //     const user = await User.login(email, password)

  //     // create a token
  //     const token = createToken(user._id)

  //     res.status(200).json({email, token})
  //   } catch (error) {
  //     res.status(400).json({error: error.message})
  //   }
  //console.log(req.user);

  // create json object for subject data

  // function for checking if student is in the database
  const checkStudent = (e_num) => {
    for (let i = 0; i < student.length; i++) {
      if (student[i].e_num === e_num) {
        return true;
      }
    }
    return false;
  };
  // function for checking if teacher is in the database
  const checkLecture = (email) => {
    for (let i = 0; i < teacher.length; i++) {
      if (teacher[i].email === email) {
        return true;
      }
    }
    return false;
  };

  // function for checking if coordinator is in the database
  const checkCoordinator = (email) => {
    for (let i = 0; i < subject.length; i++) {
      if (subject[i].corrdinator_email === email) {
        return true;
      }
    }
    return false;
  };

  const myArray = req.user.email.split("@");
  let useType = "";
  if (myArray[1] == "eng.jfn.ac.lk" && checkStudent(myArray[0])) {
    useType = "Student";
    //} else if (myArray[1] == "eng.jfn.ac.lk" && checkLecture(myArray[0])) {
  } else if (checkLecture(req.user.email)) {
    useType = "Lecture";
    if (checkCoordinator(req.user.email)) {
      useType = "Lecture with coordinator";
    }
  } else if (checkCoordinator(req.user.email)) {
    useType = "coordinator";
  } else {
    useType = "don't know";
  }
  console.log(useType);

  res.status(200).json({ type: useType });
};

const getAllExamReq = async () => {
  return await ReqExam.find({}).sort({ createdAt: -1 });
};

const getExamReq = async (req, res) => {
  const examReq = await getAllExamReq();

  // get list of subject_ID when subject[i].corrdinator_email === user.emil
  const subject_ID_list = subject.filter(
    (subj) => subj.corrdinator_email === req.user.email
  );

  // get list of examReq when examReq.subject_ID === every subject_ID_list.subject_ID
  var examReq_list = examReq.filter((exam) =>
    subject_ID_list.map((subj) => subj.subject_ID).includes(exam.subject_ID)
  );

  // add subject_name to examReq_list
  //   const examReq_list_with_subject_name = examReq_list.map((exam) => {
  //     const subject_name = subject.find(
  //       (subj) => subj.subject_ID === exam.subject_ID
  //     ).subject_name;
  //     return { ...exam, subject_name };
  //   });
    
    let newArr = []

  examReq_list.forEach((exam) => {
    const subject_name = subject.find(
      (subj) => subj.subject_ID === exam.subject_ID
      ).subject_name;
      
      // add new data to json object
      newArr.push({
          student_ID: exam.student_ID,
          batch: exam.batch,
          subject_ID: exam.subject_ID,
          attempt: exam.attempt,
          attendance: exam.attendance,
          lab_attendance: exam.lab_attendance,
          status: exam.status,
          subject_name: subject_name,
      });
    
  });

  res.status(200).json(newArr);
};

module.exports = { getUserState, getExamReq };
