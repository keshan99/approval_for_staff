import classes from "../ExamReq/Table.module.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const TableRaw = (props) => {
  //
  return (
    <tr className={`${classes["table-row"]} ${classes["table-row--chris"]} `}>
      <td className={classes["table-row__td"]}>
        <div className={classes["table-row__info"]}>
          <p className={classes["table-row__name"]}>
            {props.courseReq.student_e_num[0]}
          </p>
          <span className={classes["table-row__small"]}>
            {props.courseReq.email}
          </span>
        </div>
      </td>
    </tr>
  );
};

export default TableRaw;
