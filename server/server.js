const mongoose = require("mongoose")
const express = require("express")
const app = express()
const cors = require("cors")
const router = require("router")
const bodyParser = require("body-parser")
const uri = "mongodb+srv://keks:22101995@cluster0.o9t1k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const { Schema, model } = require("mongoose")

const schema = new Schema({
  todo: { type: String, required: true },
  important: { type: Boolean, required: true },
  checked: { type: Boolean, required: true },
})

const Todo = model("Todo", schema)

app.use(cors())
app.use(bodyParser.json())

app.get("/", async(req, res) => {
  const todos = await Todo.find({});
  res.json(todos);  
})

app.put("/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id)
  if (req.body.type === "checked") {
    await Todo.findByIdAndUpdate(req.params.id, {
      $set: {checked: !todo.checked}
    })
  }
  if (req.body.type === "important") {
    await Todo.findByIdAndUpdate (req.params.id, {
      $set: {important: !todo.important}
    })
  }
  const todos = await Todo.find({});
  res.json(todos)
})

app.post("/", async (req, res) => {
  const newDB = new Todo(req.body);
  await newDB.save()
  const todos = await Todo.find({});
  res.json(todos)
})

app.delete("/:id", async (req, res) => {
  await Todo.findByIdAndRemove(req.params.id)
  const todos = await Todo.find({});
  res.json(todos)
}) 

app.listen(7000, () => {
  try {
    mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
    console.log("server start at 7000")
  } catch (e) {
    console.log(e)
  }
})
