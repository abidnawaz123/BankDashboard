import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { images } from '../../../utils/images';
import styles from "./style.module.scss";
import { ProfileAction } from './ProfileAction';

export default function ProfileSpeedDial() {
    const { actions } = ProfileAction()
    return (
        <Box className={styles.profileSpeedDialWrapper}>
            <SpeedDial
                className={styles.speedDial}
                ariaLabel="User Profile"
                direction='down'
                icon={<img src={images.person2} className={styles.speedDialIcon} />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={action.handleClick}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
}