const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
const PORT = 8000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.connect("mongodb+srv://danhnc1302:congdanh@cluster0.inknoq3.mongodb.net/").then(() => {
    console.log("Connected to MongoDB")
}).catch((error)=> {
    console.log("Error conncting to MongoDB")
})

app.listen(PORT, () => {
    console.log("Server is running on PORT:", PORT)
})