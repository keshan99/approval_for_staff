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
        , []);

  }, [setExamReq]);





  return (
    <div>
      <Table examReq={examReq} user={props.user} key = "Table_lec"/>
    </div>
  );
};

//EXPORT MODULE
export default Dashboard;
