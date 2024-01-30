import React from 'react'
import { cardDetails } from '../../utils/CardList'
import { Box, Typography } from '@mui/material'

const CardListing = () => {
    return (
        <Box>
            {
                cardDetails.slice(0, 4).map((item, ind) => (
                    <div style={{ padding: 20, backgroundColor: 'lightblue', margin: 2, borderRadius: 8 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
                            <Typography>
                                Card Number {ind + 1} {item.balanceType} {item.balance}
                            </Typography>
                            <Typography>
                                {item.cardNumber}
                            </Typography>
                        </div>
                    </div>
                ))
            }
        </Box>
    )
}

export default CardListing
