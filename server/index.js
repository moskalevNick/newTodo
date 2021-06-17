const cors = require("cors")
const express = require("express")
const { config } = require("dotenv")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const router = require ('./router/index')
const Todo = require('./models/todo-model')
const cookieParser = require('cookie-parser')

const app = express()
const PORT = process.env.PORT || 7000

config()
app.use(cors())
app.use(cookieParser())
app.use('/api', router)
app.use(bodyParser.json())
mongoose.set('useCreateIndex', true);

app.get("/", async (req, res) => {
  const todos = await Todo.find({})
  res.json(todos)
})

app.put("/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id)
  if (req.body.type === "checked") {
    await Todo.findByIdAndUpdate(req.params.id, {
      $set: { checked: !todo.checked },
    })
  }
  if (req.body.type === "important") {
    await Todo.findByIdAndUpdate(req.params.id, {
      $set: { important: !todo.important },
    })
  }
  const todos = await Todo.find({})
  res.json(todos)
})

app.post("/", async (req, res) => {
  const newDB = new Todo(req.body)
  await newDB.save()
  const todos = await Todo.find({})
  res.json(todos)
})

app.delete("/:id", async (req, res) => {
  await Todo.findByIdAndRemove(req.params.id)
  const todos = await Todo.find({})
  res.json(todos)
})

app.delete("/", async (req, res) => {
  const allTodos = await Todo.find({})
  const checkedTodos = allTodos.filter((todo) => todo.checked === true)
  for (const todo of checkedTodos) {
    await Todo.findByIdAndRemove(todo._id)
  }
  const todos = await Todo.find({})
  res.json(todos)
})

app.listen(PORT, async () => {
  try {
    await mongoose.connect("mongodb+srv://keks:22101995Kolya@cluster0.o9t1k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
    console.log(`server start at ${PORT}`)
  } catch (e) {
    console.log(e)
  }
})
