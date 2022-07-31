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
import { useState, useEffect } from "react";
import Table from "./ExamReq/Table";
import { useAuthContext } from "../../hooks/useAuthContext";



const Dashboard = (props) => {
  const { user } = useAuthContext();
  const [examReq, setExamReq] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/val/getExamReq", {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${user.token}`
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setExamReq(data);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
        , []);

  }, [setExamReq]);





  return (
    <div>
      {/* <p>Welcome {props.userState}</p> */}

      {/* <p>{props.user.email}</p> */}

      {/* {subject.map((sub) => (
        // if condition for check 
         

        <p>{props.user.email == sub.corrdinator_email ? sub.subject_ID:""}</p>
      ))}   */}

      <Table examReq={examReq} user={props.user} key = "Table_lec"/>
    </div>
  );
};

//EXPORT MODULE
export default Dashboard;
