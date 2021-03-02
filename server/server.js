//const mongoose = require("mongoose")
const express = require("express")
const app = express()
const cors = require("cors")
const router = require("router")
const bodyParser = require("body-parser");

//url = "http://localhost:7000/"
app.use(cors())
app.use(bodyParser.json())

const todos = [
  { id: 123, todo: 111111111111111, important: true, checked: false },
  { id: 1234, todo: 2222222222222222, important: false, checked: true },
  { id: 12345, todo: 333333333333333333, important: true, checked: true },
]

app.post("/", (req, res) => {
  todos.push(req.body)
  res.json(todos)
})

app.get("/", (req, res) => {
  res.json(todos)
})

app.put("//:id", (req, res) => {
  //console.log(req.params)
})

app.listen(7000, () => {
  console.log('server start at 7000')
})
