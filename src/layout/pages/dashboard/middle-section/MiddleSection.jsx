import React from 'react';
import { Grid, Typography } from '@mui/material';
import { ActivityChart } from '../../../../components/Charts/ActivityChart/Chart';
import { ExpenseChart } from '../../../../components/Charts/ExpenseChart/Chart';

const MiddleSection = () => {
  const graphSections = [
    { name: "Weekly Activity", align: "left", component: <ActivityChart /> },
    { name: "Expense Statistics", align: "right", component: <ExpenseChart /> },
  ]
  return (
    <div>
      <Grid container spacing={2} marginBottom="2rem">
        {
          graphSections.map((item, ind) => (
            <Grid item xs={12} md={6} key={ind} >
              <Typography fontWeight="bold"
                style={{
                  textAlign: item.align,
                  margin: item.align == "right" ?
                    { marginRight: 12 }
                    : { marginLeft: 12 }
                }}
              >{item.name}</Typography>
              {item.component}
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
}

export default MiddleSection
