const mongoose = require("mongoose")
const express = require("express")
const app = express()
const cors = require("cors")
const router = require("router")
const bodyParser = require("body-parser");
const uri ="mongodb+srv://keks:22101995@cluster0.o9t1k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const { Schema, model } = require("mongoose")

const todos = [
  { id: 123, todo: 111111111111111, important: true, checked: false },
  { id: 1234, todo: 2222222222222222, important: false, checked: false },
  { id: 12345, todo: 333333333333333333, important: true, checked: true },
]
  
const schema = new Schema({
  todo: { type: String, required: true },
  important: { type: Boolean, required: true },
  checked: { type: Boolean, required: true },
})

const Todo = model("Todo", schema)
  
const t = new Todo(todos[1]);
//t.save()

app.use(cors())
app.use(bodyParser.json())

app.post("/", (req, res) => {
  todos.push(req.body)
  res.json(todos)
})

app.put("//:id", (req, res) => {
  todos.forEach(e => {
    if(e.id == req.params.id){
      e.checked = !e.checked
      console.log('check');
    }  
  })
})

app.get("/", (req, res) => {
  res.json(todos)
})

app.listen(7000, () => {
  console.log('server start at 7000')
  mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
})
