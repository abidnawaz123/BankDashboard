import React from 'react'
import styles from "./style.module.scss"
import { MenuItem, MenuList, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
    const Menus = [
        { name: 'Dashboard', path: "/" },
        { name: 'Transactions', path: "/transactions" },
        { name: 'Accounts', path: "/accounts" },
        { name: 'Investments', path: "/investments" },
        { name: 'Credit Cards', path: "/creditcards" },
        { name: 'Loans', path: "/loan" },
        { name: 'Services', path: "/services" },
        { name: 'My Privileges', path: "/privileges" },
        { name: 'Settings', path: "/settings" },
    ]

    return (
        <div className={styles.sidebarWrapper}>
            <MenuList>{
                Menus.map(item => (
                    <NavLink to={item.path}>
                        <MenuItem>
                            <Typography className={styles.navMenus}>{item.name}</Typography>
                        </MenuItem>
                    </NavLink>))
            }
            </MenuList>
        </div>
    )
}

export default SideBar
