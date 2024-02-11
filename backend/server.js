require("dotenv").config()
const express = require("express")
const app = express()

app.use(express.json())

const workoutRouters = require("./routers/workoutModel")
const cardRouters = require("./routers/cardModel")
const userRouters = require("./routers/user")
const cors = require("cors")
app.use(cors())
app.use("/api/workouts", workoutRouters)
app.use("/api/user", userRouters)
app.use("/api/card", cardRouters)

const mongoose = require("mongoose")
//connect to database 
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to the Database and server is running on port ', process.env.PORT || 4000)
        })
    })
    .catch((error) => {
        console.log(error)
    })

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWM4NmFhZjZjM2I4MzU1MzQwZDNjY2QiLCJpYXQiOjE3MDc2NTIwMzgsImV4cCI6MTcwNzkxMTIzOH0.qlsA9wLUpoIatfVcSFHDCG6ooi5U4JCsogg9DX0HDY0
//above is test@gmail.com token

//     PORT=4000
// MONGO_URI=mongodb+srv://abidnawaz:abidmernapp@mernapp.5azl0ee.mongodb.net/?retryWrites=true&w=majority
// SECRET=mymernappsecretkey