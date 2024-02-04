import React from 'react';
import { Grid, Typography } from '@mui/material';
import { dashboardGraphSection } from '../../../../utils/data';

const MiddleSection = () => {
  return (
    <div>
      <Grid container spacing={2} marginBottom="2rem">
        {
          dashboardGraphSection.map((item, ind) => (
            <Grid item xs={12} md={6} key={ind} >
              <Typography fontWeight="bold"
                style={{
                  textAlign: item.align,
                  margin: item.align == "right" ?
                    { marginRight: 12 }
                    : { marginLeft: 12 }
                }}
              >{item.name}
              </Typography>
              {item.component}
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
}

export default MiddleSection
