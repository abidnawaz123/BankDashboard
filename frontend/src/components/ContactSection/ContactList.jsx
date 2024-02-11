import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import { contactList } from '../../utils/data'

const ContactList = () => {
    return (
        <Box style={{ display: "flex", justifyContent: "space-between", padding: 20 }}>
        {
            contactList.map(item => (
                <Box>
                    <Avatar src={item.image} />
                    <Typography>{item.name}</Typography>
                    <Typography color="#718EBF">{item.status}</Typography>
                </Box>
            ))
        }
    </Box>
    )
}

export default ContactList
