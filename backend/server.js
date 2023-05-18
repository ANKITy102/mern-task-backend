const dotenv = require("dotenv").config() // it gives our application access to .env file before that we were getting error in mongouri
const mongoose = require("mongoose");
const express = require("express");
const connectDB = require("./config/connectDB");
const Task = require("./model/taskModel");
const taskRoutes = require("./routes/taskRoute")
const cors = require("cors");

const app = express();


//middleware
// const logger = ()=>{
//     console.log()
// }
app.use(cors({
    origin: ["http://localhost:3000","https://mern-task-app.onrender.com" ] //specify which url you want to accept if you want all the website to access your backend then just us app.use(cors())
}))
app.use(express.json()); // so we can send json data to backend
app.use(express.urlencoded({ extended: false }));//this is used so that we send url-form data to backend
app.use("/api/tasks", taskRoutes)

//routes
app.get("/", (req, res) => {
    res.send("Home page");
});

const port = process.env.PORT || 5000

//second method to connect to mongo and backend and use this one
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () => {
            console.log(`The server is running on ${port}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })





