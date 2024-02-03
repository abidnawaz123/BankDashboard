import React from 'react';
import { Grid, Typography } from '@mui/material';
import CreditCard from '../../../../components/Credit-Card/CreditCard';
import TransactionDetails from '../recent/Transaction';

const TopSection = () => {

  const HeadingCardList = [
    { heading: "My Cards", component: <CreditCard otherCard /> },
    { heading: "See All", component: <CreditCard /> },
    { heading: "Recent Transactions", component: <TransactionDetails otherCard /> },
  ]

  return (
    <Grid container spacing={2} style={{ marginBottom: '2rem' }}>
      {
        HeadingCardList.map((item, ind) => (
          <Grid item xs={12} md={6} lg={4} key={ind}>
            <Typography fontWeight="bold"
              style={{
                textAlign: 'right',
                marginRight: 12
              }}
            >
              {item.heading}
            </Typography>
            {item.component}
          </Grid>
        ))
      }
    </Grid>
  )
}

export default TopSection
