import React from 'react'
import { Grid } from '@mui/material'
import CreditCard from '../../../components/Credit-Card/CreditCard'
import styles from "./style.module.scss"
import TransactionDetails from './recent/Transaction'

const Dashboard = () => {

  return (
    <div className={styles.dashboardWrapper}>
      <Grid container spacing={2}>
        <Grid xs={12} md={6} lg={4}>
          <CreditCard backSideCard />
        </Grid>
        {/* <Grid xs={12} md={6} lg={4}>
          <CreditCard />
        </Grid> */}
        <Grid item xs={12} md={6} lg={4}>
          <TransactionDetails />
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard
