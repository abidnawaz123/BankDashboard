import { Card, Typography } from "@mui/material";
import { ABOUT_A_CARD } from "../../../../utils/constants";
import FormBase from "./Formik/form-base";
import styles from "./style.module.scss"

const AddCard = () => {
    return (
        <Card className={styles.CardWrapper}>
            <Typography className={styles.aboutCard}>
                {ABOUT_A_CARD}
            </Typography>
            <FormBase />
        </Card>
    )

}
export default AddCard;