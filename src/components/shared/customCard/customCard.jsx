import { Box, Paper, Typography, styled } from '@mui/material';
import React from 'react';
import { images } from '../../../utils/images';
import styles from "./style.module.scss";

const CustomCreditCard = ({ otherCard, cardDetails }) => {

    const Item = styled(Paper)(() => ({
        maxHeight: 235,
        height: 235,
        borderRadius: 20,
    }));

    const { currentBalance, cardHolder, validThru, cardNumber } = cardDetails;
    return (
        <>
            <Box >
                <Item elevation={1}
                    style={otherCard ? {} : { backgroundColor: "#4C49ED", color: "white" }}
                >
                    <Box>
                        <Box className={styles.BalanceDetails}>
                            <Box>
                                <Typography variant='caption'>Balance</Typography>
                                <Typography variant='h5'>${currentBalance ? currentBalance : ""}</Typography>
                            </Box>
                            <img alt="chip" src={otherCard ? images.blackChip : images.cardChip} />
                        </Box>
                        <Box className={styles.cardHolderLable}>
                            <Box>
                                <Typography variant='caption'>CARD HOLDER</Typography>
                                <Typography variant='h5'>{cardHolder ? cardHolder : ""}</Typography>
                            </Box>
                            <Box>
                                <Typography variant='caption'>VALID THRU</Typography>
                                <Typography variant='h5'>{validThru ? validThru : ""}</Typography>
                            </Box>
                        </Box>
                        <Box
                            className={styles.creditNumber}
                            style={otherCard && { borderTop: "0.3px solid #DFEAF2" }}
                        >
                            <Typography variant='h5'>{cardNumber ? cardNumber : ""}</Typography>
                            <img alt="master-card" src={otherCard ? images.mastercardDark : images.mastercard} />
                        </Box>
                    </Box>
                </Item>
            </Box>
        </>
    )
}

export default CustomCreditCard
