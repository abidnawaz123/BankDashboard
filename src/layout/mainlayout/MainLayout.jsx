import React from 'react'
import styles from "./style.module.scss"
import CustomHeader from '../header/Header'
import { RouterProvider } from 'react-router-dom'
import { router } from "../../Routers"

const MainLayout = () => {
    return (
        <div className={styles.mainLayoutWrapper}>
            <CustomHeader />
            <RouterProvider router={router} />
        </div>
    )
}

export default MainLayout
