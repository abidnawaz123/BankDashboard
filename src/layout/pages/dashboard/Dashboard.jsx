import React from 'react'
import styles from "./style.module.scss"
import TopSection from './top-section/TopSection'
import MiddleSection from './middle-section/MiddleSection'
import BottomSection from './bottom-section/BottomSection'

const Dashboard = () => {

  return (
    <div className={styles.dashboardWrapper}>
      <TopSection />
      <MiddleSection />
      <BottomSection />
    </div>
  )
}

export default Dashboard
