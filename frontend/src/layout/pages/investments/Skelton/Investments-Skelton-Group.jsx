import { Skeleton } from "@mui/material";
import React from "react";

const InvestmentSkeltonGroup = () => {
    return (
        <React.Fragment>
            <Skeleton animation="wave" height={200} width={400} />
            <Skeleton animation="wave" variant='circular' height={70} width={70} />
            <Skeleton animation="wave" height={20} width={400} />
            <Skeleton animation="wave" height={50} width={400} />
        </React.Fragment>
    )
}
export default InvestmentSkeltonGroup;