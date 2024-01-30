import { Box, Paper, Typography, styled } from '@mui/material';
import React from 'react'
import { images } from "../../../../utils/images";
import styles from "./style.module.scss";

const TransactionDetails = () => {
    const Item = styled(Paper)(() => ({
        maxHeight: 235,
        height: 235,
        borderRadius: 20,
    }));
    const transactionList = [
        { history: 'Deposit from my card', date: "31/Jan/2024", amount: 850, color: "#FFF5D9", img: images.bussiness, profit: false },
        { history: 'Deposit Paypal', date: "31/Jan/2024", amount: 2500, color: "#E7EDFF", img: images.paypal, profit: true, },
        { history: 'Jemi Wilson', date: "31/Jan/2024", amount: 2500, color: "#DCFAF8", img: images.moneychain, profit: true, },
    ]
    return (
        <Box className={styles.transactionWrapper}>
            <Item elevation={1}>
                {
                    transactionList.map((item, i) => (
                        <Box className={styles.boxWrapper} key={i}>
                            <img src={item.img}
                                alt={item.data}
                                style={{
                                    backgroundColor: `${item.color}`,
                                    borderRadius: '100%', padding: 10
                                }}
                            />
                            <Box style={{ flex: '0.7' }}>
                                <Typography>{item.history}</Typography>
                                <Typography>{item.date}</Typography>
                            </Box>
                            <Typography style={item.profit ? { color: 'green' } : { color: 'red' }}>{item.profit ? `+${item.amount}` : `-${item.amount}`}</Typography>
                        </Box>
                    ))
                }
            </Item>
        </Box>
    )
}

export default TransactionDetails
