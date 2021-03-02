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

  async function addTodo() {
    await fetch (uri, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: Date.now(), todo: inputValue, important: false, checked: false })
    }).then((response) => response.json())
    .then((data) => {
      setTodos(data)
    })
    setInputValue("")
  }
  
  const changeTodoChecked = (id) => {
    fetch (`${uri}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      })
  }

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
      <button onClick={addTodo}>Add</button>
      {todos.map((element) => (
        <div key={element.id}>
          <input type="checkbox" 
            checked={element.checked} 
            onChange = {() => {
            changeTodoChecked(element.id)
          }}></input>
          {element.todo}
          <button>delete</button>
        </div>
      ))}
    </div>
  )
}

export default App
