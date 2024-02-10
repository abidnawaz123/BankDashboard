import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSignup } from '../../../hooks/useSignup'
import styles from "./style.module.scss"
import { useNavigate } from 'react-router-dom'
import { ALREADY_HAVE_ACC, SIGN_IN } from '../../../utils/constants'

const Signup = () => {
    const navigate = useNavigate()
    const { signup, error, isLoading } = useSignup()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('email is =>', email, password);
        if (!email == "" && !password == "") {
            await signup(email, password)
        }
    }

    return (
        <Box className={styles.signupScreen}>
            <Typography variant='h4' fontFamily="system-ui" marginBottom="1rem">
                Signup to your account</Typography>
            <div className={styles.signupFormWrapper}>
                <Box className={styles.signupFieldsWrapper}>
                    <Box className={styles.field}>
                        Email :<TextField type='email' size='small' value={email}
                            onChange={(e) => setEmail(e.target.value.trim())}
                        />
                    </Box>
                    <Box className={styles.field}>
                        Password :<TextField type='password' size='small'
                            value={password}
                            onChange={(e) => setPassword(e.target.value.trim())}
                        />
                    </Box>
                </Box>
                <Button onClick={handleSubmit}
                    className={styles.signupButton}
                    disabled={isLoading}
                    size='small'
                    variant='contained'
                    fullWidth
                >Signup
                </Button>
                <Typography>
                    {ALREADY_HAVE_ACC}
                    <span
                        style={{ cursor: 'pointer' }}
                        onClick={() => navigate("/login")}
                    ><strong> {SIGN_IN}</strong></span>
                </Typography>
                <Typography variant="caption"
                    className={error && styles.errorMessage}>
                    {error && error}</Typography>
            </div>
        </Box>
    )
}

export default Signup
