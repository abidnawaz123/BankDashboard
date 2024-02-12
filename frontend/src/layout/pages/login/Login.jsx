import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useLogin } from '../../../hooks/useLogin'
import styles from "./style.module.scss"
import { useNavigate } from 'react-router-dom'
import { CREATE_NEW_ACC, SIGN_UP } from '../../../utils/constants'
import { useAuthContext } from '../../../hooks/useAuthContext'

const Login = () => {
    const { user } = useAuthContext()
    const navigate = useNavigate()
    const { login, isLoading, error } = useLogin()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email == "" && !password == "") {
            await login(email, password)
        }
    }
    return (
        <Box className={styles.loginScreen}>
            <Typography variant='h4' fontFamily="system-ui" marginBottom="1rem">
                Login to your account</Typography>
            <div className={styles.loginFormWrapper}>
                <Box className={styles.LoginFieldsWrapper}>
                    <Box className={styles.field}>
                        Email :<TextField type='email' size='small' value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Box>
                    <Box className={styles.field}>
                        Password :<TextField type='password' size='small'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Box>
                </Box>
                <Button onClick={handleSubmit}
                    disabled={isLoading}
                    size='small'
                    variant='contained'
                    fullWidth
                    style={{ margin: '1rem 0' }}
                >Login
                </Button>
                <Typography>{CREATE_NEW_ACC}
                    <span
                        style={{ cursor: 'pointer' }}
                        onClick={() => navigate("/signup")}
                    ><strong> {SIGN_UP}</strong></span>
                </Typography>
                <Typography variant="caption" className={error && styles.errorMessage}>
                    {error && error}</Typography>
            </div>
        </Box>
    )
}

export default Login
