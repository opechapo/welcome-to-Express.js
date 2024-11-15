const express = require('express')
const app = express()
const myRoute = require('./Routes/myRoute')
// const myController = require('./Controller')

const port = 7000
app.use("/testing", myRoute)
app.listen(port, () => console.log('Server ready'))
console.log("my boy");


app.get('/', (req, res) => res.send('Hello World!'))
app.get("/dlt", (req, res) => res.send("Welcome to Wonderland!"))
app.post("/postal", (req, res) => res.send("Welcome to Wonderland! fucker"))

