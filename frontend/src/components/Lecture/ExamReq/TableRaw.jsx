import classes from "./Table.module.css";

const TableRaw = (props) => {
    //
    return (
        <tr className={`${classes["table-row"]} ${classes["table-row--chris"]} `}>
            <td className={classes["table-row__td"]}>
                <div className={classes["table-row__info"]}>
                    <p className={classes["table-row__name"]}>{props.examReq.E_num}</p>
                    <span className={classes["table-row__small"]}>
                        {props.examReq.batch}
                    </span>
                </div>
            </td>
            <td data-column="Policy" className={classes["table-row__td"]}>
                <div className="">
                    <p className={classes["table-row__policy"]}>
                        {props.examReq.Sub_ID}
                    </p>
                    <span className={classes["table-row__small"]}>
                        {props.examReq.Sub_name}
                    </span>
                </div>
            </td>
            <td data-column="Destination" className={classes["table-row__td"]}>
                {props.examReq.ATTEMPT}
            </td>
            <td data-column="Status" className={classes["table-row__td"]}>
                <p
                    // if condition for check attendance
                    className={
                        props.examReq.ATTENDANCE >= 80
                            ? `${classes["table-row__status"]} ${classes["status--green"]} ${classes["status"]} `
                            : `${classes["table-row__status"]} ${classes["status--red"]} ${classes["status"]} `
                    }
                    // className={`${classes["table-row__status"]} ${classes["status--red"]} ${classes["status"]} `}
                >
                    {props.examReq.ATTENDANCE}%
                </p>
            </td>
            <td data-column="Progress" className={classes["table-row__td"]}>
                <p
                    className={
                        props.examReq.LAB_ATTENDANCE >= 100
                            ? `${classes["table-row__status"]} ${classes["status--green"]} ${classes["status"]} `
                            : `${classes["table-row__status"]} ${classes["status--red"]} ${classes["status"]} `
                    }
                >
                    {props.examReq.LAB_ATTENDANCE}%
                </p>
            </td>
            <td data-column="Policy status" className={classes["table-row__td"]}>
                <p
                    // if condition for check status if status == "Approved" then color is green else if status == "Not Approved" then color is red else if status == "Pending" then color is yellow
                    className={
                        props.examReq.STATUS === "Approved"
                            ? `${classes["table-row__p-status"]} ${classes["status--green"]} ${classes["status"]} `
                            : props.examReq.STATUS === "Not Approved"
                                ? `${classes["table-row__p-status"]} ${classes["status--red"]} ${classes["status"]} `
                                : `${classes["table-row__p-status"]} ${classes["status--yellow"]} ${classes["status"]} `
                    }

                   


                    // className={`${classes["table-row__p-status"]} ${classes["status--green"]} ${classes["status"]} `}
                >
                    {props.examReq.STATUS}
                </p>
            </td>

            <td className={classes["table-row__td"]}>icons</td>
        </tr>
    );
};

export default TableRaw;

