import * as React from 'react';
import Box from '@mui/material/Box';
import ReactSwipe from 'react-swipe';
import { images } from '../../../utils/images';
import { Avatar, Button, Paper, TextField, Typography, styled } from '@mui/material';
import { ChevronLeftRounded, ChevronRightRounded, SendOutlined } from '@mui/icons-material';

function SwipeableTextMobileStepper() {
    const contactToTransfer = [
        { name: "Livia Bator", image: images.person1, status: "CEO" },
        { name: "Randy Press", image: images.person2, status: "Director" },
        { name: "Workman", image: images.person3, status: "Designer" },
    ]
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
                        <Box style={{ display: "flex", justifyContent: "space-between", padding: 20 }}>
                            {
                                contactToTransfer.map(item => (
                                    <Box>
                                        <Avatar src={item.image} />
                                        <Typography>{item.name}</Typography>
                                        <Typography color="#718EBF">{item.status}</Typography>
                                    </Box>
                                ))
                            }
                        </Box>
                    </div>
                    <div> <Box style={{ display: "flex", justifyContent: "space-between", padding: 20 }}>
                        {
                            contactToTransfer.map(item => (
                                <Box>
                                    <Avatar src={item.image} />
                                    <Typography>{item.name}</Typography>
                                    <Typography color="#718EBF">{item.status}</Typography>
                                </Box>
                            ))
                        }
                    </Box>
                    </div>
                    <div>
                        <Box style={{ display: "flex", justifyContent: "space-between", padding: 20 }}>
                            {
                                contactToTransfer.map(item => (
                                    <Box>
                                        <Avatar src={item.image} />
                                        <Typography>{item.name}</Typography>
                                        <Typography color="#718EBF">{item.status}</Typography>
                                    </Box>
                                ))
                            }
                        </Box>
                    </div>
                </ReactSwipe>
                <Box style={{ display: "flex", justifyContent: "space-between", padding: "0 20px" }}>
                    <ChevronLeftRounded onClick={() => reactSwipeEl.prev()}
                        style={{
                            color: "#718EBF",
                            height: 50, width: 50,
                            borderRadius: "100%",
                            cursor: "pointer",
                            boxShadow: "0.5px 0.5px 2px 0.1px"
                        }}
                    />
                    <ChevronRightRounded onClick={() => reactSwipeEl.next()}
                        style={{
                            color: "#718EBF",
                            height: 50, width: 50,
                            borderRadius: "100%",
                            cursor: "pointer",
                            boxShadow: "0.5px 0.5px 2px 0.1px"
                        }}
                    />
                </Box>
                <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 5, padding: "10px" }}>
                    <Typography style={{ color: "#718EBF" }}>Write Amount</Typography>
                    <Box style={{
                        display: "flex",
                    }}>
                        <TextField type='text' size='small'
                            sx={{
                                "& fieldset": {
                                    border: "none",
                                },
                                backgroundColor: "#EDF1F7",
                                borderRadius: 30,
                                marginRight: "-100px"
                            }}
                            placeholder='525.50'
                        />
                        <Button
                            style={{
                                backgroundColor: "#1814F3",
                                color: "white",
                                borderRadius: 30,
                                width: "160px"
                            }}
                            endIcon={<SendOutlined style={{ color: "white", rotate: "320deg" }} />}>
                            Send
                        </Button>
                    </Box>
                </Box>
            </Item>
        </Box>
    );
}

export default SwipeableTextMobileStepper;