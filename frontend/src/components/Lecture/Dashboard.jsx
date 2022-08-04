// crete dashboard for student
import { useState, useEffect } from "react";
import Table from "./ExamReq/Table";
import Table2 from "./CourseReq/Table";
import { useAuthContext } from "../../hooks/useAuthContext";

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Dashboard(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

Dashboard.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { user } = useAuthContext();
  const [examReq, setExamReq] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/val/getExamReq", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setExamReq(data);
      }, []);
  }, [setExamReq]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Exam Approval" {...a11yProps(0)} />
          <Tab label="Course Approval" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <Dashboard value={value} index={0}>
        <div>
          {/* <p>Welcome {props.userState}</p>

          <p>{props.user.email}</p> */}

          {/* {subject.map((sub) => (
            // if condition for check

            <p>
              {props.user.email == sub.corrdinator_email ? sub.subject_ID : ""}
            </p>
          ))} */}

          <Table examReq={examReq} user={props.user} />
          {/* <Table2 examReq={examReq_list} user={props.user} /> */}
        </div>
      </Dashboard>
      <Dashboard value={value} index={1}>
        <div>
          <Table2 examReq={examReq} user={props.user} />
        </div>
      </Dashboard>
    </Box>
  );
}
