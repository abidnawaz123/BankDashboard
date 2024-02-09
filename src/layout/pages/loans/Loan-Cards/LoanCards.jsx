import React from 'react'
import { AttachMoney, CasesSharp, Person, TextIncrease } from '@mui/icons-material'
import { Box, Grid, Typography } from '@mui/material'
import styles from "./style.module.scss"

const LoanCards = () => {
    return (
        <Box className={styles.loansSectionWrapper}>
            <Grid container spacing={2} >
                <Grid item xs={12} md={6} lg={3} >
                    <Box
                        className={styles.personalLoanCard}>
                        <Person className={styles.personIcon} />
                        <Box>
                            <Typography variant='caption'>Personal Loans</Typography>
                            <Typography variant='h6' fontWeight="bold">$50,000</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Box className={styles.corporateLoanCard}>
                        <CasesSharp className={styles.caseIcon} />
                        <Box>
                            <Typography variant='caption'>Corporate Loans</Typography>
                            <Typography variant='h6' fontWeight="bold">$100,000</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Box className={styles.bussinessLoanCard}>
                        <TextIncrease
                            className={styles.increaseRateIcon}
                            style={{
                                color: '#ff00bf',
                                backgroundColor: "#f8abffb6",
                                padding: 15,
                                borderRadius: 30

                            }} />
                        <Box>
                            <Typography variant='caption'>Bussiness Loans</Typography>
                            <Typography variant='h6' fontWeight="bold">$500,000</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Box className={styles.customLoanCard}>
                        <AttachMoney className={styles.moneyIcon} />
                        <Box>
                            <Typography variant='caption'>Custom Loans</Typography>
                            <Typography variant='h6' fontWeight="bold">Choose Money</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default LoanCards
