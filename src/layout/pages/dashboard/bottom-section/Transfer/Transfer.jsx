import * as React from 'react';
import Box from '@mui/material/Box';
import ReactSwipe from 'react-swipe';
import { Button, Paper, TextField, Typography, styled } from '@mui/material';
import { ChevronLeftRounded, ChevronRightRounded, SendOutlined } from '@mui/icons-material';
import ContactList from '../../../../../components/ContactSection/ContactList';
import styles from "./style.module.scss";
import { SEND, WRITE_AMOUNT } from '../../../../../utils/constants';


function QuickTransferSection() {

    let reactSwipeEl;
    const Item = styled(Paper)(() => ({
        maxHeight: 270,
        height: 270,
        borderRadius: 20,
    }));
    return (
        <Box>
            <Item>
                <ReactSwipe
                    className='carousel'
                    swipeOptions={{ continuous: false }}
                    ref={el => { reactSwipeEl = el }}
                >
                    <div>
                        <ContactList />
                    </div>
                    <div>
                        <ContactList />
                    </div>
                    <div>
                        <ContactList />
                    </div>
                </ReactSwipe>
                <Box className={styles.swiperButtonWrapper}>
                    <ChevronLeftRounded
                        onClick={() => reactSwipeEl.prev()}
                        className={styles.moveBackward}
                    />
                    <ChevronRightRounded
                        onClick={() => reactSwipeEl.next()}
                        className={styles.moveForward}
                    />
                </Box>
                <Box className={styles.sendAmountWrapper}>
                    <Typography className={styles.sendAmountLable}>
                        {WRITE_AMOUNT}
                    </Typography>
                    <Box style={{
                        display: "flex",
                    }}>
                        <TextField type='text' size='small'
                            className={styles.actionField}
                            sx={{
                                "& fieldset": {
                                    border: "none",
                                }
                            }}
                            placeholder='525.50'
                        />
                        <Button className={styles.sendButton}
                            endIcon={<SendOutlined className={styles.sendIcon} />}>
                            {SEND}
                        </Button>
                    </Box>
                </Box>
            </Item>
        </Box>
    );
}

export default QuickTransferSection;