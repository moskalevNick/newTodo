import React, { useState, useEffect } from "react"
const uri = "http://localhost:7000"

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [amount, setAmount] = useState(0)

  async function addTodo() {
    
      const t = await fetch(uri, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
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
        'Content-Type': 'application/json',
        'Accept': 'application/json'
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
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
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

  return (
    <div className="App">
      <h1>now {amount} goals</h1>
      <input 
        className="inputWindow"        
        placeholder="write this here"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            addTodo()
          }
        }}
      />
      <button className="Add"
        onClick={addTodo} 
        disabled={!inputValue.trim()}>
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
          <button
            onClick={() => removeTodo(element._id)}
          >delete</button>
        </div>
      ))}
      </div>
    </div>
  )
}

export default App
