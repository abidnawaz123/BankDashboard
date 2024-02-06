import { Card, Typography } from "@mui/material";
import { ABOUT_A_CARD } from "../../../../utils/constants";
import FormBase from "./Formik/form-base";

const AddCard = () => {
    return (
        <Card style={{borderRadius:8}}>
            <Typography style={{ color: "#718EBF",padding:50,textAlign:"center" }}>{ABOUT_A_CARD}</Typography>
            <FormBase />
        </Card>
    )

}
export default AddCard;