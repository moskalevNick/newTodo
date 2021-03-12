import React, { useState, useEffect } from "react"
import Modal from "./component/Modal"
const uri = "http://localhost:7000"

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState("") 
  const [amount, setAmount] = useState(0)
  const [checkedTodo, setCheckedTodo] = useState(0)
  const [isModalOpen, setModalOpen] = useState(false)

  async function addTodo() {
    console.log('addtodo');
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

  const trigerModal = () => {
    setModalOpen((prev) => !prev)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="container1">
          <h1>now {amount} goals</h1>
          <button className="openModal" onClick={trigerModal}>+</button>
        </div>
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
        </div>
        <meter className="meter" low="30" high="70" optimum="50" max="100" value={checkedTodo || 0}></meter>
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
        {isModalOpen && <Modal addTodo={addTodo}/>}
      </div>
    </div>
  )
}

export default App
