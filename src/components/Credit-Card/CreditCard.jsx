import { Box, Paper, Typography, styled } from '@mui/material'
import React from 'react'
import { images } from '../../utils/images';
import styles from "./style.module.scss"

const CreditCard = ({ backSideCard }) => {
    const Item = styled(Paper)(() => ({
        maxHeight: 235,
        height: 235,
        borderRadius: 20,
    }));
    return (
        <>
            <Box style={{ padding: 10 }}>
                <Item elevation={1} className={styles.PaperWrapper}
                //  style={{ backgroundColor: "#4C49ED", color: "white" }}
                 >
                    <Box>
                        <Box className={styles.BalanceDetails}>
                            <Box>
                                <Typography variant='caption'>Balance</Typography>
                                <Typography variant='h5'>$576</Typography>
                            </Box>
                            <img src={images.cardChip} />
                        </Box>
                        <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-around",margin:"15px 0" }}>
                            <Box>
                                <Typography variant='caption'>CARD HOLDER</Typography>
                                <Typography variant='h5'>Eddy Cusuma</Typography>
                            </Box>
                            <Box>
                                <Typography variant='caption'>VALID THRU</Typography>
                                <Typography variant='h5'>12/24/2004</Typography>
                            </Box>
                        </Box>
                        <Box className={styles.creditNumber}>
                            <Typography variant='h5'>3730 **** **** 1234</Typography>
                            <img src={images.mastercard} />
                        </Box>
                    </Box>
                </Item>
            </Box>
        </>
    )
}

export default CreditCard
