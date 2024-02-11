import React from 'react';
import { Grid, Typography } from '@mui/material';
import { DashboardHeadingCardList } from '../../../../utils/data';
import styles from "./style.module.scss";

const TopSection = () => {
  return (
    <Grid container spacing={2} className={styles.dashboardtopSection}>
      {
        DashboardHeadingCardList.map((item, ind) => (
          <Grid item xs={12} md={6} lg={4} key={ind}>
            <Typography fontWeight="bold"
              className={styles.dashboardCardsHeading}>
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
