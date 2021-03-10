import React, { useState, useEffect } from "react"
const uri = "http://localhost:7000"

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [amount, setAmount] = useState(0)
  const [checkedTodo, setCheckedTodo] = useState(0)

  async function addTodo() {
    const t = await fetch(uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ todo: inputValue, important: false, checked: false }),
    })
    const response = await t.json()
    setTodos(response)
    setInputValue("")
    setAmount(response.length)
  }

  const changeTodo = async (id, type) => {
    const response = await fetch(`${uri}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ type: type }),
    })
    const data = await response.json()
    setTodos(data)
    setAmount(data.length)
  }

  const removeTodo = async (id) => {
    const response = await fetch(`${uri}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    const data = await response.json()
    setTodos(data)
    setAmount(data.length)
  }

  useEffect(() => {
    fetch(uri)
      .then((response) => response.json())
      .then((data) => {
        setAmount(data.length)
        setTodos(data)
      })
  }, [])

  useEffect(() => {
    const checked = todos.filter((todo) => todo.checked === true)
    setCheckedTodo((checked.length / todos.length) * 100)
  }, [todos])

  return (
    <div className="App">
      <h1>now {amount} goals</h1>
      <input
        className="inputWindow"
        placeholder="Add your new todo"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            addTodo()
          }
        }}
      />
      <button className="Add" onClick={addTodo} disabled={!inputValue.trim()}>
        +
      </button>
      <div className="List">
        {todos.map((element) => (
          <div key={element._id} className="todo">
            <input
              type="checkbox"
              checked={element.checked}
              onChange={() => {
                changeTodo(element._id, "checked")
              }}
            />
            <div
              className={element.important ? "important" : "label"}
              onClick={() => {
                changeTodo(element._id, "important")
              }}
            >
              {element.todo}
            </div>
            <button onClick={() => removeTodo(element._id)}>
              <i className="fa fa-trash"></i>
            </button>
          </div>
        ))}
      <meter className="meter" low="30" high="70" optimum="50" max="100" value={checkedTodo || 0}></meter>
      </div>
      <button
        className="deleteChecked"
        onClick={() => {
          todos.forEach((element) => {
            if (element.checked) removeTodo(element._id)
          })
        }}
      >
        delete all checked
      </button>
      <i className="fa fa-plus-circle" aria-hidden="true" id="plus"></i>
    </div>
  )
}

export default App
