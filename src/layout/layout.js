import React from 'react'
import SideBar from './sidebar/Sidebar'
import MainLayout from './mainlayout/MainLayout'
import styles from "./style.module.scss"

const Layout = () => {
    return (
        <div className={styles.layoutWrapper}>
            <SideBar />
            <MainLayout/>
        </div>
    )
}

export default Layout
