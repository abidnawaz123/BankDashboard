import * as yup from "yup";

export const validationSchema = yup.object().shape({
    balance: yup.string().required("This field is required"),
    cardholdername: yup.string().required("This field is required"),
    validThru: yup.string().required("This field is required"),
    number: yup.string().required("This field is required"),
})