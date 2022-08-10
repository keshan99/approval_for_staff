import classes from "../ExamReq/Table.module.css";
import TableRaw from "./TableRaw";

const Table = (props) => {
  return (
    <div>
      <div className={classes.container}>
        <div className={`${classes["row"]} ${classes["row--top-20"]} `}>
          <div className={classes["col-md-12"]}>
            <div className={classes["table-container"]}>
              <table className={classes.table}>
                <thead className={classes.table__thead}>
                  <tr>
                    <th className={classes.table__th}>E number</th>
                    <th className={classes.table__th}>Subject ID</th>
                    <th className={classes.table__th}>Attempt</th>
                    <th className={classes.table__th}>Prerequisites</th>
                    <th className={classes.table__th}>Prerequisites Status</th>
                    <th className={classes.table__th}>status</th>
                    <th className={classes.table__th}></th>
                  </tr>
                </thead>
                <tbody className={classes.table__tbody}>
                  {/* for loop for every examReq */}
                  {props.courseReq.map((courseReq) => (
                    <TableRaw user={props.user} courseReq={courseReq} />
                  ))}

                  {/* {props.courseReq.map((courseReq) => {
                    if (courseReq.status === "Pending") {
                      return (
                        <TableRaw courseReq={courseReq} user={props.user} />
                      );
                    }
                  })}
                  {props.courseReq.map((courseReq) => {
                    if (courseReq.status !== "Pending") {
                      return (
                        <TableRaw courseReq={courseReq} user={props.user} />
                      );
                    }
                  })} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
