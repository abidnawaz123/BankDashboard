import React from "react";
import { Box, Paper, Typography, styled } from '@mui/material';

const Item = styled(Paper)(() => ({
    maxHeight: 235,
    height: 235,
    borderRadius: 20,
}));

const SharedCard = ({ children }) => {
    return (
        <Box>
            <Item elevation={1} style={{ backgroundColor: "#2B27F1", color: "white", padding: 10 }}>
                <Box>
                    <Typography variant="h6">Balance</Typography>
                    <Typography variant="caption">$5756</Typography>
                </Box>
                <Box>
                    <Typography variant="h6">CARD HOLDER</Typography>
                    <Typography variant="caption">$5756</Typography>
                </Box>
                <Box>
                    <Typography variant="h6">VALID THRU</Typography>
                    <Typography variant="caption">12/22</Typography>
                </Box>
                <Box>
                    <Typography variant="h6">3778 **** **** 1234</Typography>
                    <Typography variant="caption">x</Typography>
                </Box>
            </Item>
        </Box >
    )
}
export default SharedCard;