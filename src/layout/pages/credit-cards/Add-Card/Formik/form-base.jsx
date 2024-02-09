import React, { useState } from 'react';
import { Formik } from 'formik';
import { validationSchema } from './form-defination/add-card-defination';
import { Alert, Box, Button, CircularProgress, TextField, Grid } from '@mui/material';
import axios from 'axios';
import styles from "./style.module.scss";

const FormBase = () => {
    const [response, setResponse] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;


    const handleClick = (newState) => () => {
        setState({ ...newState, open: true });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    return (
        <div className={styles.formBaseWrapper}>
            <Formik
                initialValues={{
                    balance: "",
                    cardholdername: "",
                    validThru: "",
                    number: ""
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setIsLoading(true)
                    const sendData = {
                        balance: values.balance,
                        name: values.cardholdername,
                        cardNumber: values.number,
                        valid: values.validThru
                    }
                    const res = axios.post("/api/card", sendData)
                    res.then(resp => {
                        setResponse(resp)
                        setIsLoading(false)
                        setSubmitting(false)
                    })
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    setFieldValue,
                    setFieldError,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => {
                    console.log('values are =>', values);
                    const changeBalanceHandler = (e) => {
                        setFieldValue("balance", e.target.value)
                    }
                    const changeCardHolderName = (e) => {
                        setFieldValue("cardholdername", e.target.value)
                    }
                    const changeValidThru = (e) => {
                        setFieldValue("validThru", e.target.value)
                    }
                    const changeNumber = (e) => {
                        setFieldValue("number", e.target.value)
                    }
                    return (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <Box className={styles.formBox1}>
                                <Box className={styles.BalancefieldWrapper}>
                                    <TextField
                                        sx={{
                                            "& fieldset": {
                                                border: "1px solid #DFEAF2",
                                                borderRadius: 2
                                            },
                                            minWidth: 250
                                        }}
                                        name="balance"
                                        placeholder='Balance'
                                        type="number"
                                        onChange={changeBalanceHandler}
                                        onBlur={handleBlur}
                                    />
                                    <Box component="span" color="red">
                                        {errors.balance && touched.balance && errors.balance}
                                    </Box>
                                </Box>
                                <Box className={styles.cardholderfieldWrapper}>
                                    <TextField
                                        sx={{
                                            "& fieldset": {
                                                border: "1px solid #DFEAF2",
                                                borderRadius: 2
                                            },
                                            minWidth: 250
                                        }}
                                        name="cardholdername"
                                        placeholder='Cardholdername'
                                        onChange={changeCardHolderName}
                                        onBlur={handleBlur}
                                    />
                                    <Box component="span" color="red">
                                        {errors.cardholdername && touched.cardholdername && errors.cardholdername}
                                    </Box>
                                </Box>
                            </Box>
                            <Box className={styles.formBox2}>
                                <Box className={styles.validThrufieldWrapper} >
                                    <TextField
                                        sx={{
                                            "& fieldset": {
                                                border: "1px solid #DFEAF2",
                                                borderRadius: 2
                                            },
                                            minWidth: 250
                                        }}
                                        name="validThru"
                                        placeholder='ValidThru'
                                        type="date"
                                        onChange={changeValidThru}
                                        onBlur={handleBlur}
                                    />
                                    <Box component="span" color="red">
                                        {errors.validThru && touched.validThru && errors.validThru}
                                    </Box>
                                </Box>
                                <Box className={styles.numberfieldWrapper}>
                                    <TextField
                                        sx={{
                                            "& fieldset": {
                                                border: "1px solid #DFEAF2",
                                                borderRadius: 2
                                            },
                                            minWidth: 250
                                        }}
                                        name="number"
                                        placeholder='Number'
                                        onChange={changeNumber}
                                        type="number"
                                        onBlur={handleBlur}
                                    />
                                    <Box component="span" color="red">
                                        {errors.number && touched.number && errors.number}
                                    </Box>
                                </Box>
                            </Box>
                            <Box className={styles.cardAddActionButton}>
                                <Button type="submit"
                                    disabled={isSubmitting || !values.number || isLoading}
                                    className={styles.submitButton}
                                    endIcon={isLoading &&
                                        <CircularProgress variant='indeterminate' size={20} />}
                                >
                                    Add Card
                                </Button>
                            </Box>
                        </form>
                    )
                }}
            </Formik>
        </div >
    );
}

export default FormBase;