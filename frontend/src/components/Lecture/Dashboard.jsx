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
      Sub_ID: "AB1001",
      Sub_name: "C++",
      ATTEMPT: 1,
      ATTENDANCE: 88,
      LAB_ATTENDANCE: 100,
      STATUS: "Not Approved",
    },
    {
      E_num: "2001e002",
      batch:"E01",
      Sub_ID: "AB1001",
      Sub_name: "C++",
      ATTEMPT: 1,
      ATTENDANCE: 70,
      LAB_ATTENDANCE: 90,
      STATUS: "Pending",
    },
    {
      E_num: "2001e003",
      batch:"E01",
      Sub_ID: "AB1001",
      Sub_name: "C++",
      ATTEMPT: 1,
      ATTENDANCE: 88,
      LAB_ATTENDANCE: 90,
      STATUS: "Approved",
    },
  ];
  return (
    <div>
      <p>Welcome {props.userState}</p>
      <Table examReq={examReq} />
    </div>
  );
};

//EXPORT MODULE
export default dashboard;

