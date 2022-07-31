// crete dashboard for student
import Table from "./ExamReq/Table";
import Table1 from "./ExamReq/Table1";
import { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

const Dashboard = (props) => {
  const temp = [
    {
      _id:1,
      Subject_ID: "AB1101",
      subject_name: "Algorithm",
      attempt: 1,
      status: "not choose",
      credit: 3,
    },
    {
      _id:11,
      Subject_ID: "AB1201",
      subject_name: "python",
      attempt: 1,
      status: "not choose",
      credit: 3,
    },
    {
      _id:111,
      Subject_ID: "AB1301",
      subject_name: "java",
      attempt: 1,
      status: "not choose",
      credit: 3,
    },
    {
      _id:121,
      Subject_ID: "AB1401",
      subject_name: "ML",
      attempt: 1,
      status: "not choose",
      credit: 3,
    },
    {
      _id:131,
      Subject_ID: "AB1501",
      subject_name: "c#",
      attempt: 1,
      status: "not choose",
      credit: 3,
    },
    {
      _id:145,
      Subject_ID: "AB1601",
      subject_name: "javascript",
      attempt: 1,
      status: "not choose",
      credit: 3,
    },
  ];

  const { user } = useAuthContext();
  const [examReq, setExamReq] = useState([]);
  const [listExamReq, setListExamReq] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:4000/api/val/getExamReq", {
    //   method: "GET",
    //   headers: {
    //     'Authorization': `Bearer ${user.token}`
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setExamReq(data);
    //   }
    //     , []);
    setExamReq(temp);

  }, [setExamReq]);

  //funshion to add examReq element when button press(add to list)
  const addExamReq = (id) => {
    // get examreq by id
    const newvalue = examReq.filter((examReq) => examReq._id === id);

    // remove examreq by id
    const newExamReq = examReq.filter((examReq) => examReq._id !== id);
    setExamReq(newExamReq);
    setListExamReq([...listExamReq, newvalue[0]]);
  }

  const removeExamReq = (id) => {
    // get examreq by id
    const newvalue = listExamReq.filter((examReq) => examReq._id === id);

    // remove examreq by id
    const newExamReq = listExamReq.filter((examReq) => examReq._id !== id);

    setListExamReq(newExamReq);
    setExamReq([...examReq, newvalue[0]]);
  }
  

  
    return (
      <div>
        
        <Table examReq={examReq} user={props.user} addExamReq={addExamReq} key="Table_stu" />
        {/* if  listExamReq != null show it*/}
        {listExamReq.length > 0 ? (
          <Table1 examReq={listExamReq} user={props.user} removeExamReq={removeExamReq} key="Table1_stu" />
        ) : (
          <div></div>
        )}
        {/* <Table1 examReq={listExamReq} user={props.user} key="Table_stu" /> */}
      </div>
    );
  };

//EXPORT MODULE
export default Dashboard;
