import { Box, Paper, Typography, styled } from '@mui/material';
import styles from "./style.module.scss";
import { images } from '../../../../utils/images';
import InvestmentSkeltonGroup from './Investments-Skelton-Group';


const CardSkelton = ({ cardLoading, otherCard, cardDetails }) => {

    const Item = styled(Paper)(() => ({
        maxHeight: "auto",
        height: 235,
        borderRadius: 20,
    }));
    const { currentBalance, cardHolder, validThru, cardNumber } = cardDetails;

    return (
        <Box className={styles.investmentCardWrapper}>
            {
                cardLoading ?
                    <InvestmentSkeltonGroup />
                    :
                    <Item elevation={1}
                        style={otherCard ? {} : { backgroundColor: "#4C49ED", color: "white" }}
                    >
                        <Box>
                            <Box className={styles.BalanceDetails}>
                                <Box>
                                    <Typography variant='caption' fontWeight="bold">Balance</Typography>
                                    <Typography variant='h5'>${currentBalance}</Typography>
                                </Box>
                                <img alt="chip" src={otherCard ? images.blackChip : images.cardChip} />

                            </Box>
                            <Box className={styles.cardHolderLable}>
                                <Box>
                                    <Typography variant='caption' fontWeight="bold">CARD HOLDER</Typography>
                                    <Typography variant='h5'>{cardHolder}</Typography>
                                </Box>
                                <Box>
                                    <Typography variant='caption' fontWeight="bold">VALID THRU</Typography>
                                    <Typography variant='h5'>{validThru}</Typography>
                                </Box>
                            </Box>
                            <Box
                                className={styles.creditNumber}
                                style={otherCard && { borderTop: "0.3px solid #DFEAF2" }}
                            >
                                <Typography variant='h6'>{cardNumber}</Typography>
                                <img alt="master-card" src={otherCard ? images.mastercardDark : images.mastercard} />
                            </Box>
                        </Box>
                    </Item>
            }
        </Box>
    )
}

export default CardSkelton;