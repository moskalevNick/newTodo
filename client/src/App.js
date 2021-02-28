import React, { useState, useEffect } from "react"
const uri = "http://localhost:7000/"

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState("")
  useEffect(() => {
    fetch(uri)
      .then((response) => response.json())
      .then((data) => {
        setTodos(data)
      })
  }, [])
  return (
    <div className="App">
      <h1>do it</h1>
      <input
        placeholder="write this here"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
      ></input>
      <button>Add</button>
      {todos.map((element) => (
        <div key={element.id}>
          <input type="checkbox"></input>
          {element.todo}
          <button>delete</button>
        </div>
      ))}
    </div>
  )
}

export default App
