import classes from "./Table.module.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const TableRaw = (props) => {
    //
    return (
        <tr className={`${classes["table-row"]} ${classes["table-row--chris"]} `}>
            <td data-column="Subject" className={classes["table-row__td"]}>
                <div className="">
                    <p className={classes["table-row__policy"]}>
                        {props.examReq.subject_ID}
                    </p>
                    <span className={classes["table-row__small"]}>
                        {props.examReq.subject_name}
                    </span>
                </div>
            </td>
            <td data-column="attempt" className={classes["table-row__td"]}>
                {/* {props.examReq.attempt} */} 1
            </td>
            <td data-column="credit" className={classes["table-row__td"]}>
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
                            props.removeExamReq(props.examReq._id);
                            // console.log(props.examReq._id)
                            }
                            }>Remove</Button>
                    </ButtonGroup>
                ) : (
                    <p></p>
                )}
            </td>
        </tr>
    );
};

export default TableRaw;

