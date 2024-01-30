import { Box, Typography } from '@mui/material'
import React from 'react'
import cardImage from "../../assets/images/creditcard.png"
import cardImageFront from "../../assets/images/creditcardfront.png"
import cardChip from "../../assets/icons/CardChip.svg"
import frontsideChipCard from "../../assets/icons/frontsideChipCard.svg"
import styles from "./style.module.scss"
import fadedMasterCard from "../../assets/icons/fadedMastercard.svg"
import { cardDetails } from '../../utils/CardList'

const CreditCard = ({ backSideCard }) => {
    return (
        <div className={styles.cardWrapper}>
            {
                !backSideCard ?
                    cardDetails.slice(0, 1).map(item => (
                        <Box className={styles.frontSideCard}>
                            <img src={cardImageFront} alt="cardimagefront" />
                            <Box className={styles.cardDetails}>
                                <Box>
                                    <Typography variant='caption'>{item.balanceType}</Typography>
                                    <Typography>${item.balance}</Typography>
                                </Box>
                                <img src={frontsideChipCard} alt="cardimagefrontChip" />
                            </Box>
                            <Box className={styles.cardDetails2}>
                                <Box>
                                    <Typography variant='caption'>{item.holder}</Typography>
                                    <Typography>$5756</Typography>
                                </Box>
                                <Box>
                                    <Typography variant='caption'>{item.validLable}</Typography>
                                    <Typography>{item.time}</Typography>
                                </Box>
                            </Box>
                            <Box className={styles.cardNumberDetails}>
                                <Typography>{item.cardNumber}</Typography>
                                <img src={fadedMasterCard} alt="mastercardimage" />
                            </Box>
                        </Box>
                    ))
                    :
                    <Box className={styles.backSideCard}>
                        <img src={cardImage} alt="cardimage" />
                        <Box className={styles.cardDetails}>
                            <Box>
                                <Typography variant='caption'>Balance</Typography>
                                <Typography>$5756</Typography>
                            </Box>
                            <img src={cardChip} alt="cardChipimage" />
                        </Box>
                        <Box className={styles.cardDetails2}>
                            <Box>
                                <Typography variant='caption'>CARD HOLDER</Typography>
                                <Typography>$5756</Typography>
                            </Box>
                            <Box>
                                <Typography variant='caption'>VALID THRU</Typography>
                                <Typography>12/22</Typography>
                            </Box>
                        </Box>
                        <Box className={styles.cardNumberDetails}>
                            <Typography>3778 **** **** 1234</Typography>
                            <img src={fadedMasterCard} alt="mastercardimage" />
                        </Box>
                    </Box>
            }
        </div>
    )
}

export default CreditCard
