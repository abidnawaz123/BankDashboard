import { Grid, Typography } from '@mui/material'
import React from 'react'
import SwipeableTextMobileStepper from '../Transfer'
import SplineChart from '../../../../components/Charts/SplineChart/Chart'

const BottomSection = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={4}>
                    <Typography fontWeight="bold">Quick Transfer</Typography>
                    <SwipeableTextMobileStepper />
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
