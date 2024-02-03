import React from 'react'
import { Grid, Typography } from '@mui/material'
import CreditCard from '../../../components/Credit-Card/CreditCard'
import styles from "./style.module.scss"
import TransactionDetails from './recent/Transaction'
import MyApexChart from '../../../components/Charts/ActivityChart/Chart'
import { ExpenseChart } from '../../../components/Charts/ExpenseChart/Chart'

const Dashboard = () => {

  return (
    <div className={styles.dashboardWrapper}>
      <Grid container spacing={2} style={{ marginBottom: '2rem' }}>
        <Grid item xs={12} md={6} lg={4}>
          <Typography style={{ textAlign: 'right', marginRight: 12 }}>My Cards</Typography>
          <CreditCard otherCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Typography style={{ textAlign: 'right', marginRight: 12 }}>See All</Typography>
          <CreditCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Typography style={{ textAlign: 'right', marginRight: 12 }}>Recent Transactions</Typography>
          <TransactionDetails />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} 
        style={{ backgroundColor: "white", borderRadius: 20 }}
        >
           <ExpenseChart />
        </Grid>
        <Grid item xs={12} md={4}
        style={{ backgroundColor: "white", borderRadius: 20 }}
        >
         <MyApexChart />
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard
