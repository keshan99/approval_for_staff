import classes from "./Table.module.css";
import TableRaw from "./TableRaw";
// props.examReq

const Table = (props) => {
  return (
    <div>
      <div className={classes.container}>
        <div className={`${classes["row"]} ${classes["row--top-40"]} `}>
          <div className={classes["col-md-12"]}>
            <h2 className={classes.row__title}>EXAM REQ</h2>
          </div>
        </div>
        <div className={`${classes["row"]} ${classes["row--top-20"]} `}>
          <div className={classes["col-md-12"]}>
            <div className={classes["table-container"]}>
              <table className={classes.table}>
                <thead className={classes.table__thead} >
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
                    <TableRaw examReq={exam} addExamReq={props.addExamReq} key={exam.id} />
                  ))}
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
