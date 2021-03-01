//const mongoose = require("mongoose")
const express = require("express")
const app = express()
const cors = require("cors")
const router = require("router")

url = "http://localhost:7000/"
app.use(cors())
app.use(router())

const todos = [
  { id: 123, todo: 1, important: true, checked: false },
  { id: 1234, todo: 2, important: false, checked: false },
  { id: 12345, todo: 3, important: true, checked: false },
]

app.get("/", (req, res) => {
  res.json(todos)
})

app.post("/", (req, res) => {
  console.log(req.body)
})


app.listen(7000)
