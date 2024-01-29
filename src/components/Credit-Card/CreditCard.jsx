import { Box, Typography } from '@mui/material'
import React from 'react'
import cardImage from "../../assets/images/creditcard.png"
import cardImageFront from "../../assets/images/creditcardfront.png"
import cardChip from "../../assets/icons/CardChip.svg"
import frontsideChipCard from "../../assets/icons/frontsideChipCard.svg"
import styles from "./style.module.scss"
import fadedMasterCard from "../../assets/icons/fadedMastercard.svg"

const CreditCard = ({backSideCard}) => {

    const seeAllCards = () => {
    }

    return (
        <div className={styles.cardWrapper}>
            {
                !backSideCard ?
                    <Box className={styles.frontSideCard}>
                        <img src={cardImageFront}  />
                        <Box className={styles.cardDetails}>
                            <Box>
                                <Typography variant='caption'>Balance</Typography>
                                <Typography>$5756</Typography>
                            </Box>
                            <img src={frontsideChipCard} />
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
                            <img src={fadedMasterCard} />
                        </Box>
                    </Box> :
                    <Box className={styles.backSideCard}>
                        <img src={cardImage}  />
                        <Box className={styles.cardDetails}>
                            <Box>
                                <Typography variant='caption'>Balance</Typography>
                                <Typography>$5756</Typography>
                            </Box>
                            <img src={cardChip} />
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
                            <img src={fadedMasterCard} />
                        </Box>
                    </Box>
            }
        </div>
    )
}

export default CreditCard