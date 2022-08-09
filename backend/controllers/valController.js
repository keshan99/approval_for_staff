const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const ReqExam = require("../models/ReqExamModel");
const subject = [
  {
    _id: 100,
    subject_ID: "AB1010",
    subject_name: "Algorithm",
    deparment: "computer",
    corrdinator_email: "amal@gmail.com",
    semester: "1",
    academic_year: "2018/19",
    credit: "3",
  },
  {
    _id: 101,
    subject_ID: "AB1020",
    subject_name: "python",
    deparment: "computer",
    corrdinator_email: "isuru@gmail.com",
    semester: "1",
    academic_year: "2018/19",
    credit: "3",
  },
  {
    _id: 102,
    subject_ID: "AB1030",
    subject_name: "java",
    deparment: "computer",
    corrdinator_email: "amal@gmail.com",
    semester: "1",
    academic_year: "2018/19",
    credit: "3",
  },
  {
    _id: 103,
    subject_ID: "AB1040",
    subject_name: "ML",
    deparment: "computer",
    corrdinator_email: "isuru@gmail.com",
    semester: "1",
    academic_year: "2018/19",
    credit: "3",
  },
  {
    _id: 104,
    subject_ID: "AB1050",
    subject_name: "c#",
    deparment: "computer",
    corrdinator_email: "amal@gmail.com",
    semester: "1",
    academic_year: "2018/19",
    credit: "3",
  },
  {
    _id: 105,
    subject_ID: "AB1060",
    subject_name: "javascript",
    deparment: "computer",
    corrdinator_email: "channa@gmail.com",
    semester: "1",
    academic_year: "2018/19",
    credit: "3",
  },
];

// crete json object for student data
const student = [
  {
    e_num: "2001e001",
    academic_year: "2001/02",
  },
  {
    e_num: "2001e002",
    academic_year: "2001/02",
  },
  {
    e_num: "2001e003",
    academic_year: "2001/02",
  },
  {
    e_num: "2001e004",
    academic_year: "2001/02",
  },
  {
    e_num: "2001e005",
    academic_year: "2001/02",
  },
  {
    e_num: "2001e006",
    academic_year: "2001/02",
  },
  {
    e_num: "2001e007",
    academic_year: "2001/02",
  },
  {
    e_num: "2001e008",
    academic_year: "2001/02",
  },
  {
    e_num: "2001e009",
    academic_year: "2001/02",
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

const funGetUserState = async (req) => {
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
  
  return useType;
}
// login a user
const getUserState = async (req, res) => {

  const useType = await funGetUserState(req);
  // console.log(useType);
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

  let newArr = [];

  examReq_list.forEach((exam) => {
    const subject_name = subject.find(
      (subj) => subj.subject_ID === exam.subject_ID
    ).subject_name;

    // add new data to json object
    newArr.push({
      _id: exam._id,
      student_ID: exam.student_ID,
      academic_year: exam.academic_year,
      subject_ID: exam.subject_ID,
      attempt: exam.attempt,
      attendance: exam.attendance,
      lab_attendance: exam.lab_attendance,
      status: exam.status,
      subject_name: subject_name,
    });
  });
  //console.log(newArr);

  res.status(200).json(newArr);
};

const getSubjectDetails = async (req, res) => {
  const useType = await funGetUserState(req);

  if (useType == "Student") {
    // add status: "not choose" as every subject list items
    var newSubject = subject.map((subj) => {
      return {
        ...subj,
        status: "not choose",
      };
    }
    );

    // add status: "choose" as every subject list items that student has already choose
    const student_e_num = req.user.email.split("@")[0];
    //get only subject_id list from subject
    const subject_ID_list = newSubject.map((subj) => subj.subject_ID);
    
    
    //console.log(subject_ID_list);

    
    const examReq_list = await ReqExam.find({
      student_ID: student_e_num,
      subject_ID: { $in: subject_ID_list },
    });
    
    //remove examReq_list item from newSubject list
    examReq_list.forEach((exam) => {
      const index = newSubject.findIndex(
        (subj) => subj.subject_ID === exam.subject_ID
      );
      newSubject.splice(index, 1);
    }
    );
    
    
    res.status(200).json(newSubject);
  } else {
    res.status(200).json({ error: "You are not a student" });
  }
    
  
};

module.exports = { getUserState, getExamReq, getSubjectDetails };
