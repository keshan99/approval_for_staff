// // crete dashboard for student
// import Table from './ExamReq/Table';

// const dashboard = (props) => {
//   return (
//     <div>
//       <p>Welcome {props.userState}</p>
//       <Table/>
//     </div>
//   );
// };

// //EXPORT MODULE
// export default dashboard;


// crete dashboard for student
import Table from "./ExamReq/Table";

const dashboard = (props) => {
  const examReq = [
    {
      E_num: "2001e001",
      batch:"E01",
      Sub_ID: "AB1011",
      Sub_name: "C++",
      ATTEMPT: 1,
      ATTENDANCE: 88,
      LAB_ATTENDANCE: 100,
      STATUS: "Not Approved",
    },
    {
      E_num: "2001e002",
      batch:"E01",
      Sub_ID: "AB1011",
      Sub_name: "C++",
      ATTEMPT: 1,
      ATTENDANCE: 70,
      LAB_ATTENDANCE: 90,
      STATUS: "Pending",
    },
    {
      E_num: "2001e003",
      batch:"E01",
      Sub_ID: "AB1011",
      Sub_name: "C++",
      ATTEMPT: 1,
      ATTENDANCE: 88,
      LAB_ATTENDANCE: 90,
      STATUS: "Approved",
    },
    {
      E_num: "2001e003",
      batch: "E01",
      Sub_ID: "AB1020",
      Sub_name: "first subject",
      ATTEMPT: 1,
      ATTENDANCE: 88,
      LAB_ATTENDANCE: 90,
      STATUS: "Approved",
    },
    {
      E_num: "2001e003",
      batch: "E01",
      Sub_ID: "AB1040",
      Sub_name: "fourth subject",
      ATTEMPT: 1,
      ATTENDANCE: 88,
      LAB_ATTENDANCE: 90,
      STATUS: "Pending",
    }
      
  ];
  const subject = [
    {
      "subject_ID": "AB1010",
      "subject_name": "first subject",
      "deparment": "computer",
      "corrdinator_email": "amal@gmail.com",
      "semester": "1"
    },
    {
      "subject_ID": "AB1020",
      "subject_name": "second subject",
      "deparment": "computer",
      "corrdinator_email": "isuru@gmail.com",
      "semester": "1"
    },
    {
      "subject_ID": "AB1030",
      "subject_name": "third subject",
      "deparment": "computer",
      "corrdinator_email": "amal@gmail.com",
      "semester": "1"
    },
    {
      "subject_ID": "AB1040",
      "subject_name": "fourth subject",
      "deparment": "computer",
      "corrdinator_email": "isuru@gmail.com",
      "semester": "1"
    },
    {
      "subject_ID": "AB1050",
      "subject_name": "fifth subject",
      "deparment": "computer",
      "corrdinator_email": "amal@gmail.com",
      "semester": "1"
    },
    {
      "subject_ID": "AB1060",
      "subject_name": "sixth subject",
      "deparment": "computer",
      "corrdinator_email": "channa@gmail.com",
      "semester": "1"
    }
  ];


// get list of subject_ID when subject[i].corrdinator_email === props.user.emil
  const subject_ID_list = subject.filter(
    (subj) => subj.corrdinator_email === props.user.email
  );

  // get list of examReq when examReq.Sub_ID === every subject_ID_list.subject_ID
  const examReq_list = examReq.filter(
    (exam) => subject_ID_list.map((subj) => subj.subject_ID).includes(exam.Sub_ID)
  );

  return (
    <div>
      <p>Welcome {props.userState}</p>

     
      {/* <p>{props.user.email}</p> */}
      
     
        {/* {subject.map((sub) => (
        // if condition for check 
         

        <p>{props.user.email == sub.corrdinator_email ? sub.subject_ID:""}</p>
      ))}   */}

          




      



      <Table examReq={examReq_list} user = {props.user} />
    </div>
  );
};

//EXPORT MODULE
export default dashboard;

