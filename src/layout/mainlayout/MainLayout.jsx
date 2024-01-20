import React from 'react'
import styles from "./style.module.scss"
import CustomHeader from '../header/Header'
const MainLayout = () => {
    return (
        <div className={styles.mainLayoutWrapper}>
            <CustomHeader />
        </div>
    )
}

export default MainLayout
