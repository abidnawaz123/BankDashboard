import { Card } from "@mui/material";
import Basic from "./Formik/Basic";
import { ABOUT_A_CARD } from "../../../../utils/constants";

const AddCard = () => {
    return (
        <Card>
            {ABOUT_A_CARD}
            Add a card
            <Basic />
        </Card>
    )

}
export default AddCard;