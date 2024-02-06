import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomCreditCard from '../../../components/shared/customCard/customCard'
import SplineChart from '../../../components/Charts/SplineChart/Chart'
import CardListing from './card-listing/CardListing'
import AddCard from './Add-Card/AddCard'
import CardSetting from './card-setting/CardSetting'

const CreditCards = () => {
  const cardDetails = {
    currentBalance: 4500,
    cardHolder: "Ali Asad",
    validThru: "12/4/2021",
    cardNumber: "49503093439093309"
  }
  return (
    <div style={{ padding: 20 }}>
      <Typography>My Cards</Typography>
      <Grid container spacing={2} >
        <Grid item xs={12} md={4}>
          <CustomCreditCard cardDetails={cardDetails} />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomCreditCard cardDetails={cardDetails} />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomCreditCard otherCard cardDetails={cardDetails} />
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: '2rem' }}>
        <Grid item xs={12} md={4}>
          <SplineChart />
        </Grid>
        <Grid item xs={12} md={8}>
          <CardListing />
          <CardListing />
          <CardListing />
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: '2rem' }}>
        <Grid item xs={12} md={8}>
          <Typography fontWeight="bold">Add New Card</Typography>
          <AddCard />
        </Grid>
        <Grid item xs={12} md={4}>
        <Typography fontWeight="bold">Card Setting</Typography>
          <CardSetting/>
        </Grid>
      </Grid>
    </div>
  )
}

export default CreditCards
