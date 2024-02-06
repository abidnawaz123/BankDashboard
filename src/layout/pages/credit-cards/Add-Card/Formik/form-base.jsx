import React from 'react';
import { Formik } from 'formik';
import { validationSchema } from './add-card-defination';
import { Box, Button, Input, TextField } from '@mui/material';

const FormBase = () => (
    <div style={{ padding: 20 }}>
        <Formik
            initialValues={{
                balance: "",
                cardholdername: "",
                validThru: "",
                number: ""
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit}>
                    <Box style={{ display: "flex", justifyContent: "space-around", marginBottom: "2rem" }}>
                        <TextField
                            sx={{
                                "& fieldset": {
                                    border: "1px solid #DFEAF2",
                                    borderRadius: 2
                                },
                                minWidth:260
                            }}
                            name="card.balance"
                            placeholder='Balance'
                            type="email"
                            // onChange={handleChange}
                            onBlur={handleBlur}
                        // value={values.email}
                        />
                        {errors.email && touched.email && errors.email}
                        <TextField
                            sx={{
                                "& fieldset": {
                                    border: "1px solid #DFEAF2",
                                    borderRadius: 2
                                },
                                minWidth:260
                            }}
                            name="card.cardholdername"
                            placeholder='Cardholdername'
                            // onChange={handleChange}
                            onBlur={handleBlur}
                        // value={values.password}
                        />
                        {errors.password && touched.password && errors.password}
                    </Box>
                    <Box style={{ display: "flex", justifyContent: "space-around", marginBottom: "2rem" }}>

                        <TextField
                            sx={{
                                "& fieldset": {
                                    border: "1px solid #DFEAF2",
                                    borderRadius: 2
                                },
                                minWidth:260
                            }}
                            name="card.validThru"
                            placeholder='ValidThru'
                            type="password"
                            // onChange={handleChange}
                            onBlur={handleBlur}
                        // value={values.password}
                        />
                        {errors.password && touched.password && errors.password}
                        <TextField
                            sx={{
                                "& fieldset": {
                                    border: "1px solid #DFEAF2",
                                    borderRadius: 2
                                },
                                minWidth:260
                            }}
                            name="card.number"
                            placeholder='Number'
                            type="password"
                            // onChange={handleChange}
                            onBlur={handleBlur}
                        // value={values.password}
                        />
                        {errors.password && touched.password && errors.password}
                    </Box>
                    <Box style={{ marginLeft: 75, marginBottom: "2rem" }}>
                        <Button type="submit" disabled={isSubmitting}
                            style={{ backgroundColor: "#1814F3", color: "white", minWidth: 150 }}>
                            Add Card
                        </Button>
                    </Box>
                </form>
            )}
        </Formik>
    </div>
);

export default FormBase;