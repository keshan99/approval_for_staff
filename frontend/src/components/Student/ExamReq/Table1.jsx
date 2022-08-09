import classes from "./Table1.module.css";
import TableRaw1 from "./TableRaw1";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
// props.examReq

const Table1 = (props) => {
  return (
    <div>
      <div className={classes.container}>
        <div className={`${classes["row"]} ${classes["row--top-40"]} `}>
          <div className={classes["col-md-12"]}>
            <h2 className={classes.row__title}>LIST</h2>
          </div>
        </div>
        <div className={`${classes["row"]} ${classes["row--top-20"]} `}>
          <div className={classes["col-md-12"]}>
            <div className={classes["table-container"]}>
              <table className={classes.table}>
                <thead className={classes.table__thead}>
                  <tr>
                    <th className={classes.table__th}>Subject ID</th>
                    <th className={classes.table__th}>attempt</th>
                    <th className={classes.table__th}>credit</th>
                    <th className={classes.table__th}></th>
                  </tr>
                </thead>
                <tbody className={classes.table__tbody}>
                  {/* for loop for every examReq */}
                  {props.examReq.map((exam) => (
                    <TableRaw1
                      examReq={exam}
                      removeExamReq={props.removeExamReq}
                    />
                  ))}
                </tbody>
              </table>
              <div className={classes.submit_btn}>
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  color="success"
                  onClick={() => {
                    props.submitExamReq(props.examReq);
                    // console.log(props.examReq._id)
                  }}
                >
                  submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table1;
