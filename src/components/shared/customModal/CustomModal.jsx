import { Box, Modal } from '@mui/material';
import React from 'react'
import styles from "./style.module.scss"
import CloseOutlined from "@mui/icons-material/CloseOutlined"
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const CustomModal = ({ open, setOpen,children }) => {
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={styles.customModalStyle}
      >
        <Box sx={style}>
          <div className={styles.iconWrapper}>
          <CloseOutlined className={styles.iconStyle} onClick={handleClose}/>
          </div>
          {children && children}
        </Box>
      </Modal>
    </div>
  )
}

export default CustomModal
