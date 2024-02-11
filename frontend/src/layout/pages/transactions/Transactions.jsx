import { Grid, Typography } from '@mui/material'
import React from 'react'
import CustomCreditCard from '../../../components/shared/customCard/customCard'
import SplineChart from '../../../components/Charts/SplineChart/Chart'
import TransactionsTabs from './Tabs-section/Tabs'

const Transactions = () => {
  const cardDetails = {
    currentBalance: 4500,
    cardHolder: "Ali Asad",
    validThru: "12/4/2021",
    cardNumber: "49503093439093309"
  }
  return (
    <div style={{ padding: 20 }}>
      <Typography fontWeight="bold">My Cards</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <CustomCreditCard cardDetails={cardDetails} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <CustomCreditCard otherCard cardDetails={cardDetails} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <SplineChart />
        </Grid>
      </Grid>
      <Typography fontWeight="bold">Recent Transactions</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TransactionsTabs />
        </Grid>
      </Grid>
    </div>
  )
}

export default Transactions
