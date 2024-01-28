import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import CreditCard from '../../../components/Credit-Card/CreditCard'
import CustomModal from '../../../components/modal/CustomModal'
import { SEE_ALL } from '../../../utils/constants'

const Dashboard = () => {
  const [open, setOpen] = useState(false)

  const showAllCards = () => {
    setOpen(true)
  }

  return (
    <div className={styles.dashboardWrapper}>
      <Box className={styles.cardWrapper}>
        <Typography>My Cards</Typography>
        <Typography className={style.seeAllCards}
          onClick={showAllCards}>
          {SEE_ALL}
        </Typography>
      </Box>
      <Box display="flex">
        <CreditCard backSideCard />
        <CreditCard />
      </Box>
      <CustomModal open={open} setOpen={setOpen} />
    </div>
  )
}

export default Dashboard
