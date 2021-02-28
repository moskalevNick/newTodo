const mongoose = require("mongoose")
const express = require("express")
const app = express()
const cors = require("cors")

url = "http://localhost:7000/"
app.use(cors())

const todos = [
  { id: 123, todo: 1, important: true, checked: false },
  { id: 1234, todo: 2, important: false, checked: false },
  { id: 12345, todo: 3, important: true, checked: false },
]

app.get("/", (req, res) => {
  res.json(todos)
})

app.listen(7000)
