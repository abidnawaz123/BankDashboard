import React from 'react'
import styles from "./style.module.scss"
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Box } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';

const CustomHeader = () => {
  return (
    <div className={styles.headerWrapper}>
      <p>Overview</p>
      <Box className={styles.headerRightside}>
        <Box className={styles.searchFieldWrapper}>
          <SearchIcon style={{ color: "#718EBF" }} />
          <input placeholder='Search for something' className={styles.headerSearchField} />
        </Box>
        <SettingsIcon className={styles.gearIcon} style={{ color: '#718EBF' }} />
        <NotificationsIcon color='error' className={styles.notificationIcon} />
        <Avatar variant='circular' />
      </Box>
    </div>
  )
}

export default CustomHeader
