import React from 'react'
import LoanCards from './Loan-Cards/LoanCards'
import { Box, Typography } from '@mui/material'
import { ACTIVE_LOANS } from '../../../utils/constants'
import { LoanTable } from './Loan-Table/LoanTable'

const Loans = () => {
    return (
        <React.Fragment>
            <LoanCards />
            <Box style={{ padding: 20 }}>
                <Typography fontWeight="bold" >{ACTIVE_LOANS}</Typography>
                <LoanTable />
            </Box>
        </React.Fragment>
    )
}

export default Loans
