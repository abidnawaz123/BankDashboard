import { Apple, CreditCardOff, Google, LockOutlined } from '@mui/icons-material'
import { Box, Card, Typography } from '@mui/material'
import React from 'react'

const CardSetting = () => {
    return (
        <Card>
            <Box style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem",padding:20}}>
                <CreditCardOff style={{ color: "#FFBB38", backgroundColor: "#FFF5D9", borderRadius: 20, padding: 20 }} />
                <Box>
                    <Typography>Block Card</Typography>
                    <Typography style={{ color: "#718EBF" }}>Instantly Block Your Card</Typography>
                </Box>
            </Box>
            <Box style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem",padding:20}}>
                <LockOutlined style={{ color: "#396AFF", backgroundColor: "#E7EDFF", borderRadius: 20, padding: 20 }} />
                <Box>
                    <Typography>Block Card</Typography>
                    <Typography style={{ color: "#718EBF" }}>Instantly Block Your Card</Typography>
                </Box>
            </Box>
            <Box style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem",padding:20}}>
                <Google style={{ color: "#FF82AC", backgroundColor: "#FFE0EB", borderRadius: 20, padding: 20 }} />
                <Box>
                    <Typography>Block Card</Typography>
                    <Typography style={{ color: "#718EBF" }}>Instantly Block Your Card</Typography>
                </Box>
            </Box>
            <Box style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem",padding:20}}>
                <Apple style={{ color: "#16DBCC", backgroundColor: "#DCFAF8", borderRadius: 20, padding: 20 }} />
                <Box>
                    <Typography>Block Card</Typography>
                    <Typography style={{ color: "#718EBF" }}>Instantly Block Your Card</Typography>
                </Box>
            </Box>
            <Box style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem",padding:20}}>
                <Apple style={{color: "#16DBCC", backgroundColor: "#DCFAF8", borderRadius: 20, padding: 20 }} />
                <Box>
                    <Typography>Block Card</Typography>
                    <Typography style={{ color: "#718EBF" }}>Instantly Block Your Card</Typography>
                </Box>
            </Box>
        </Card>
    )
}

export default CardSetting
