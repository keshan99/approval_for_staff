import classes from "../ExamReq/Table.module.css";
// import TableRaw from "./TableRaw";
// props.examReq

const Table = (props) => {
  console.log(props.examReq[0]);
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
                    <th className={classes.table__th}>Course ID</th>
                    <th className={classes.table__th}>Attempt</th>
                    <th className={classes.table__th}>prerequests</th>
                    <th className={classes.table__th}>prerequests results</th>
                    <th className={classes.table__th}>status</th>
                    <th className={classes.table__th}></th>
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
                        <p>Hello</p>
                        // <TableRaw
                        //   key={examReq.E_num}
                        //   examReq={examReq}
                        //   user={props.user}
                        // />
                      );
                    }
                  })}
                  {props.examReq.map((examReq) => {
                    if (examReq.STATUS !== "Pending") {
                      return (
                        <p>Hello</p>
                        // <TableRaw
                        //   key={examReq.E_num}
                        //   examReq={examReq}
                        //   user={props.user}
                        // />
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
