import { Box, Button, Grid, Typography } from "@mui/material";
import CreditCardIcon from '@mui/icons-material/CreditCard';

const CardListing = () => {
    const cardDetails = {
        currentBalance: 4500,
        cardHolder: "Ali Asad",
        validThru: "12/4/2021",
        cardNumber: "49503093439093309"
    }
    return (
        <>
            <Grid item xs={12} style={{ backgroundColor: 'white', padding: 20, borderRadius: 8, marginBottom: "1rem" }} >
                <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box style={{ backgroundColor: "#E7EDFF", padding: 10, borderRadius: 20 }}>
                        <CreditCardIcon />
                    </Box>
                    <Box>
                        <Typography>Card Type</Typography>
                        <Typography style={{ color: "#718EBF" }}>Secondary</Typography>
                    </Box>

                    <Box>
                        <Typography>Bank Type</Typography>
                        <Typography style={{ color: "#718EBF" }}>DBL Bank</Typography>
                    </Box>
                    <Box>
                        <Typography>Card Number</Typography>
                        <Typography style={{ color: "#718EBF" }}>**** **** 5600</Typography>
                    </Box>
                    <Box>
                        <Typography>Namain Card</Typography>
                        <Typography style={{ color: "#718EBF" }}>William</Typography>
                    </Box>
                    <Box>
                        <Typography style={{ color: "#1814F3" }}>View Details</Typography>
                    </Box>
                    <Box>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default CardListing;