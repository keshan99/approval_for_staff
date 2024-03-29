// crete dashboard for student
import Table from "./ExamReq/Table";
import Table1 from "./ExamReq/Table1";
import { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

const Dashboard = (props) => {
  const { user } = useAuthContext();
  const [examReq, setExamReq] = useState([]);
  const [listExamReq, setListExamReq] = useState([]);
  //for change state
  const [state, setState] = useState(1);

  useEffect(() => {
    fetch("http://localhost:4000/api/val/getSubjectDetails", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setExamReq(data);
        setListExamReq([]);
        console.log(data);
      }, []);
    // setExamReq(temp);
  }, [setExamReq,state]);

  //funshion to add examReq element when button press(add to list)
  const addExamReq = (id) => {
    // get examreq by id
    const newvalue = examReq.filter((examReq) => examReq._id === id);

    // remove examreq by id
    const newExamReq = examReq.filter((examReq) => examReq._id !== id);
    setExamReq(newExamReq);
    setListExamReq([...listExamReq, newvalue[0]]);
  };

  const removeExamReq = (id) => {
    // get examreq by id
    const newvalue = listExamReq.filter((examReq) => examReq._id === id);

    // remove examreq by id
    const newExamReq = listExamReq.filter((examReq) => examReq._id !== id);

    setListExamReq(newExamReq);
    setExamReq([...examReq, newvalue[0]]);
  };

  //funshion for submit examReq
  const submitExamReq = (examReq) => {
    // get examreq by id
    console.log("submit");
    //console.log list of listExamReq
    

    fetch("http://localhost:4000/api/exam/insertReqExams", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json"
      },
      //send list of listExamReq as body
      body: JSON.stringify({
        listExamReq: listExamReq,
    }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState(state + 1);
        
      }, []);

  };

  return (
    <div>
      <Table
        examReq={examReq}
        user={props.user}
        addExamReq={addExamReq}
        key="Table_stu"
      />
      {/* if  listExamReq != null show it*/}
      {listExamReq.length > 0 ? (
        <Table1
          examReq={listExamReq}
          user={props.user}
          removeExamReq={removeExamReq}
          submitExamReq={submitExamReq}
          key="Table1_stu"
        />
      ) : (
        <div></div>
      )}
      {/* <Table1 examReq={listExamReq} user={props.user} key="Table_stu" /> */}
    </div>
  );
};

//EXPORT MODULE
export default Dashboard;
