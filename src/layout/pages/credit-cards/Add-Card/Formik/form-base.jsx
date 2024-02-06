import React from 'react';
import { Formik } from 'formik';
import { validationSchema } from './form-defination/add-card-defination';
import { Box, Button, Input, TextField } from '@mui/material';
import axios from 'axios';
import styles from "./style.module.scss";

const FormBase = () => {

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
                    console.log('values are =+++>', values)
                    const sendData = {
                        balance: values.balance,
                        name: values.cardholdername,
                        cardNumber: values.number,
                        valid: values.validThru
                    }
                    const res = axios.post("http://localhost:4000/api/card", sendData)
                    res.then(response => console.log('response is =>', response))
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
                        <form onSubmit={handleSubmit}>
                            <Box className={styles.formBox}>
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
                                    type="text"
                                    onChange={changeBalanceHandler}
                                    onBlur={handleBlur}
                                />
                                {errors.balance && touched.balance && errors.balance}
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
                                {errors.cardholdername && touched.cardholdername && errors.cardholdername}
                            </Box>
                            <Box style={{ display: "flex", justifyContent: "space-around", marginBottom: "2rem" }}>
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
                                {errors.validThru && touched.validThru && errors.validThru}
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
                                    type="text"
                                    onBlur={handleBlur}
                                />
                                {errors.number && touched.number && errors.number}
                            </Box>
                            <Box style={{ marginLeft: 75, marginBottom: "2rem" }}>
                                <Button type="submit"
                                    disabled={isSubmitting || !values.number}
                                    style={{
                                        backgroundColor: "#1814F3",
                                        color: "white", minWidth: 150
                                    }}
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