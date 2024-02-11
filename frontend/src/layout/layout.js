import React from 'react'
import SideBar from './sidebar/Sidebar'
import MainLayout from './mainlayout/MainLayout'
import styles from "./style.module.scss"
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className={styles.layoutWrapper}>
            <SideBar />
            <div className={styles.pageStyling}>
                <MainLayout />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
