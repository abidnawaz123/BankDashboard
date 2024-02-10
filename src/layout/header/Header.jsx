import React, { useEffect, useState } from 'react'
import styles from "./style.module.scss"
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Box, TextField, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import CustomModal from '../../components/shared/customModal/CustomModal';
import { Menus } from '../sidebar/MenuItems';
import { useNavigate } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';
import { Login, Logout } from '@mui/icons-material';


const CustomHeader = () => {
  const { user } = useAuthContext()
  const [open, setOpen] = useState(false)
  const [comps, setComps] = useState([])
  const navigate = useNavigate()
  const { logout } = useLogout()

  useEffect(() => {
    setComps(Menus)
  }, [])

  const handleChange = (e) => {
    const searchValue = e.target.value;
    const filteredArray = comps.filter(item =>
      item.name.toLowerCase().split("").includes(searchValue.toLowerCase()))
    if (!searchValue) {
      setComps(Menus)
    } else {
      setComps(filteredArray)
    }
  }
  const handleGoToSpecificPath = (path) => {
    setOpen(false)
    navigate(path)
  }
  const handleLogout = () => {
    logout()
  }
  return (
    <div className={styles.headerWrapper}>
      <p>Overview</p>
      <Box className={styles.headerRightside}>
        <Box className={styles.searchFieldWrapper}>
          <SearchIcon style={{ color: "#718EBF" }} />
          <input placeholder='Search for something'
            onChange={() => { setOpen(true) }}
            className={styles.headerSearchField} />
        </Box>
        <SettingsIcon
          className={styles.gearIcon}
          style={{ color: '#718EBF', cursor: 'pointer' }}
          onClick={() => { navigate("/settings") }}
        />
        {
          user && (
            <Logout color='error'
              style={{ cursor: 'pointer' }}
              onClick={handleLogout}
              className={styles.notificationIcon} />
          )
        }
        {
          !user && (
            <>
              <Login color='action' />
              <Avatar variant='circular' />
            </>
          )
        }
      </Box>
      {
        open &&
        <CustomModal
          open={open}
          setOpen={setOpen}
          children={
            <Box style={{ textAlign: "center" }}>
              <TextField type='text'
                placeholder='Search For Components'
                fullWidth
                onChange={handleChange}
                sx={{
                  "& fieldset": {
                    // border: 'none',
                    borderBottom: '1px solid blue'
                  }
                }} />
              <Box>
                {
                  comps.map(item => (
                    <Box style={{ padding: 5 }}
                      onClick={() => { handleGoToSpecificPath(item.path) }}>
                      <Typography
                        style={{
                          border: '1px solid ThreeDShadow',
                          backgroundColor: "ButtonHighlight",
                          padding: 20,
                        }}>
                        {item.name}
                      </Typography>
                    </Box>
                  ))
                }
              </Box>
            </Box>
          } />
      }
    </div>
  )
}

export default CustomHeader
