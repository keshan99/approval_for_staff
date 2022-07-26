import classes from "./Table.module.css";
import TableRaw from "./TableRaw";
// props.examReq

const Table = (props) => {
  console.log(props.examReq[0]);
  return (
    <div>
      <div className={classes.container}>
        <div className={`${classes["row"]} ${classes["row--top-40"]} `}>
          <div className={classes["col-md-12"]}>
            <h2 className={classes.row__title}>EXAM APPROVAL</h2>
          </div>
        </div>
        <div className={`${classes["row"]} ${classes["row--top-20"]} `}>
          <div className={classes["col-md-12"]}>
            <div className={classes["table-container"]}>
              <table className={classes.table}>
                <thead className={classes.table__thead}>
                  <tr>
                    <th className={classes.table__th}>E number</th>
                    <th className={classes.table__th}>Subject ID</th>
                    <th className={classes.table__th}>attempt</th>
                    <th className={classes.table__th}>attendance</th>
                    <th className={classes.table__th}>Lab attendance</th>
                    <th className={classes.table__th}>status</th>
                    <th className={classes.table__th}>b</th>
                  </tr>
                </thead>
                <tbody className={classes.table__tbody}>
                  {/* for loop for every examReq */}

                  {/* {props.examReq.map((examReq) => (
                    <TableRaw key={examReq.E_num} examReq={examReq} />
                  ))} */}

                  {props.examReq.map((examReq) => {
                    if (examReq.STATUS === "Pending") {
                      return (
                        <TableRaw
                          key={examReq.E_num}
                          examReq={examReq}
                          user={props.user}
                        />
                      );
                    }
                  })}
                  {props.examReq.map((examReq) => {
                    if (examReq.STATUS !== "Pending") {
                      return (
                        <TableRaw
                          key={examReq.E_num}
                          examReq={examReq}
                          user={props.user}
                        />
                      );
                    }
                  })}


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
