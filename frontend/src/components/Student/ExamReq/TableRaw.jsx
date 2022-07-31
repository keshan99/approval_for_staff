import classes from "./Table.module.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const TableRaw = (props) => {
    //
    return (
        <tr className={`${classes["table-row"]} ${classes["table-row--chris"]} `}>
            <td data-column="Policy" className={classes["table-row__td"]}>
                <div className="">
                    <p className={classes["table-row__policy"]}>
                        {props.examReq.Subject_ID}
                    </p>
                    <span className={classes["table-row__small"]}>
                        {props.examReq.subject_name}
                    </span>
                </div>
            </td>
            <td data-column="Destination" className={classes["table-row__td"]}>
                {props.examReq.attempt}
            </td>
            <td data-column="Destination" className={classes["table-row__td"]}>
                {props.examReq.credit}
            </td>
            

            {/* <td className={classes["table-row__td"]}>icons</td> */}
            <td className={classes["table-row__td"]}>
                {props.examReq.status === "not choose" ? (
                    <ButtonGroup
                        size="small"
                        aria-label="small button group"
                        variant="outlined"
                    >
                        <Button onClick={() => {
                            props.addExamReq(props.examReq._id);
                            // console.log(props.examReq._id)
                            }
                            }>Add to List</Button>
                    </ButtonGroup>
                ) : (
                    <p></p>
                )}
            </td>
        </tr>
    );
};

export default TableRaw;

