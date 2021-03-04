import React, { useState, useEffect } from "react"
const uri = "http://localhost:7000"

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState("")
  

async function addTodo() {
  const t = await fetch (uri, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: Date.now(), todo: inputValue, important: false, checked: false })
  })
  const response = await t.json()
  setTodos(response)
  setInputValue("") 
}
  
  const changeTodoChecked = async (id) => {
    const response = await fetch (`${uri}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
    })
    const data = await response.json()
    setTodos(data);
  }

  const changeTodoImportant = (id) => {
    fetch (`${uri}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' }
    })
  }

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
      <button onClick={addTodo} disabled={!inputValue.trim()} >Add</button>
      {todos.map((element) => (
        <div 
        key={element.id} 
        className="todo"    
        >
          <input type="checkbox" 
            checked={element.checked} 
            onChange = {() => {
            changeTodoChecked(element.id)
            }}/>
          <div 
            className={element.important?"important":"label"}
            onClick = {() => {
            changeTodoImportant(element.id)
            console.log('important');
            }}
          >
          {element.todo}
          </div>
          <button 
            //onClick={removeTodo}
          >delete</button>
        </div>
      ))}
    </div>
  )
}

export default App
