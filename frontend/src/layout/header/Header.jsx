import React, { useEffect, useState } from 'react'
import styles from "./style.module.scss"
import SearchIcon from '@mui/icons-material/Search';
import { Box, TextField, Typography } from '@mui/material';
import CustomModal from '../../components/shared/customModal/CustomModal';
import { Menus } from '../sidebar/MenuItems';
import { useNavigate } from 'react-router-dom';
import ProfileSpeedDial from './Account/Profile';


const CustomHeader = () => {
  const [open, setOpen] = useState(false)
  const [comps, setComps] = useState([])
  const navigate = useNavigate()

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
      </Box>
      <ProfileSpeedDial/>
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
