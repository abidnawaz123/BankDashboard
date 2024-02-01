import React from "react";
import { Box, Card, CardContent, Paper, Typography, styled } from '@mui/material';
import { images } from "../../../utils/images";
import styles from "./style.module.scss"

const Item = styled(Paper)(() => ({
    maxHeight: 235,
    height: 235,
    borderRadius: 20,
}));

const SharedCard = ({ children }) => {
    return (
        <Card>
            <CardContent>
                <Box className={styles.detailsCard}>
                    <Box>
                        <Typography variant="body2">Balance</Typography>
                        <Typography variant="h5">$5756</Typography>
                    </Box>
                    <img src={images.cardChip} alt="cardChip" />
                </Box>
                <Box className={styles.cardValidityLable}>
                    <Box >
                        <Typography variant="body2">CARD HOLDER</Typography>
                        <Typography variant="h5">Eddy Cusuma</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body2">VALID THRU</Typography>
                        <Typography variant="h5">12/22</Typography>
                    </Box>
                </Box>
                <Box className={styles.bottomCardDetails}>
                    <Typography variant="body1">3778 **** **** 1234</Typography>
                    <img src={images.mastercard} />
                </Box>

            </CardContent>
        </Card>
    )
}
export default SharedCard;