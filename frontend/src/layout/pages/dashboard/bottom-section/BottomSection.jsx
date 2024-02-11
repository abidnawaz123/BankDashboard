import { Grid, Typography } from '@mui/material'
import React from 'react'
import SplineChart from '../../../../components/Charts/SplineChart/Chart'
import QuickTransferSection from './Transfer/Transfer'

const BottomSection = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={4}>
                    <Typography fontWeight="bold">Quick Transfer</Typography>
                    <QuickTransferSection />
                </Grid>
                <Grid item xs={12} md={6} lg={8}>
                    <Typography fontWeight="bold">Balance History</Typography>
                    <SplineChart />
                </Grid>
            </Grid>
        </div>
    )
}

export default BottomSection
