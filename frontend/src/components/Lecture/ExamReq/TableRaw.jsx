import classes from "./Table.module.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const TableRaw = (props) => {
    //
    return (
        <tr className={`${classes["table-row"]} ${classes["table-row--chris"]} `}>
            <td className={classes["table-row__td"]}>
                <div className={classes["table-row__info"]}>
                    <p className={classes["table-row__name"]}>{props.examReq.student_ID}</p>
                    <span className={classes["table-row__small"]}>
                        {props.examReq.academic_year}
                    </span>
                </div>
            </td>
            <td data-column="Policy" className={classes["table-row__td"]}>
                <div className="">
                    <p className={classes["table-row__policy"]}>
                        {props.examReq.subject_ID}
                    </p>
                    <span className={classes["table-row__small"]}>
                        {props.examReq.subject_name}
                    </span>
                </div>
            </td>
            <td data-column="Destination" className={classes["table-row__td"]}>
                {props.examReq.attempt}
            </td>
            <td data-column="status" className={classes["table-row__td"]}>
                <p
                    // if condition for check attendance
                    className={
                        props.examReq.attendance >= 80
                            ? `${classes["table-row__status"]} ${classes["status--green"]} ${classes["status"]} `
                            : `${classes["table-row__status"]} ${classes["status--red"]} ${classes["status"]} `
                    }
                // className={`${classes["table-row__status"]} ${classes["status--red"]} ${classes["status"]} `}
                >
                    {props.examReq.attendance}%
                </p>
            </td>
            <td data-column="Progress" className={classes["table-row__td"]}>
                <p
                    className={
                        props.examReq.lab_attendance >= 100
                            ? `${classes["table-row__status"]} ${classes["status--green"]} ${classes["status"]} `
                            : `${classes["table-row__status"]} ${classes["status--red"]} ${classes["status"]} `
                    }
                >
                    {props.examReq.lab_attendance}%
                </p>
            </td>
            <td data-column="Policy status" className={classes["table-row__td"]}>
                <p
                    // if condition for check status if status == "Approved" then color is green else if status == "Not Approved" then color is red else if status == "Pending" then color is yellow
                    className={
                        props.examReq.status === "Approved"
                            ? `${classes["table-row__p-status"]} ${classes["status--green"]} ${classes["status"]} `
                            : props.examReq.status === "Not Approved"
                                ? `${classes["table-row__p-status"]} ${classes["status--red"]} ${classes["status"]} `
                                : `${classes["table-row__p-status"]} ${classes["status--yellow"]} ${classes["status"]} `
                    }

          // className={`${classes["table-row__p-status"]} ${classes["status--green"]} ${classes["status"]} `}
        >
          {props.examReq.status}
        </p>
      </td>

      {/* <td className={classes["table-row__td"]}>icons</td> */}
      <td className={classes["table-row__td"]}>
        {props.examReq.status === "Pending" ? (
          <ButtonGroup
            size="small"
            aria-label="small button group"
            variant="outlined"
          >
            <Button>Approve</Button>
            <Button>Reject</Button>
          </ButtonGroup>
        ) : (
          <p></p>
        )}
      </td>
    </tr>
  );
};

export default TableRaw;
