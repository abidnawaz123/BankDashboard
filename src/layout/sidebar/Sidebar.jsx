import React, { useState } from 'react'
import styles from "./style.module.scss"
import { Box, MenuItem, MenuList, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import logoicon from "../../assets/icons/logoicon.svg"
import { Menus } from './MenuItems'
import { MenuOutlined } from '@mui/icons-material'
const SideBar = () => {
    const [showMenus, setShowMenus] = useState(true)
    return (
        <>
            <span className={styles.menuIconBox}>
                <MenuOutlined fontSize='large'
                    onClick={() => { setShowMenus(s => !s) }}
                    className={styles.handleMenuIcon}
                />
            </span>
            <div className={styles.sidebarWrapper}
                style={showMenus ?
                    { display: 'block' }
                    : { display: 'none' }}
            >
                <MenuList>
                    <Box className={styles.logoWrapper}>
                        <img src={logoicon} alt="logo" />
                        <Typography variant='h4' className={styles.LogoLabel}>BankDash.</Typography>
                    </Box>
                    {
                        Menus.map(item => (
                            <NavLink key={item.path} to={item.path}>
                                <MenuItem>
                                    <Typography className={styles.navMenus}>{item.name}</Typography>
                                </MenuItem>
                            </NavLink>))}
                </MenuList>
            </div>
        </>
    )
}

export default SideBar
