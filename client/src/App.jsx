import React, { useState, useEffect } from "react"
import { faMoon, faSun, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Modal from "./component/Modal"
import ModalDelete from "./component/ModalDelete"
import AllImportant from "./component/AllImportant"
import AllChecked from "./component/AllChecked"
import Container from "./components/Container"

const uri = process.env.REACT_APP_API_URL

function App() {
  
  const [inputValue, setInputValue] = useState("")
  
  
  
  const [isDay, setDay] = useState("")
 /*  const addTodo = async () => {
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
    setModalOpen(false)
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
    setModalDeleteOpen(false)
  }

  const removeAllChecked = async () => {
    const response = await fetch(uri, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    const data = await response.json()
    setTodos(data)
    setAmount(data.length)
    setModalDeleteOpen(false)
  } */

 /*  useEffect(() => {
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

  const triggerModal = () => {
    setModalOpen((prev) => !prev)
  }

  const triggerModalDelete = (data) => {
    setModalDeleteOpen((prev) => !prev)
    setAcceptTodo(data)
  }

  const triggerNight = () => {
    setDay((prev) => !prev)
  } */

  return (
    <Container />
    /* <Router>
      <div className={isDay ? "day" : "night"}>
        <nav>
          <div className="navBar">
            <Link to="/">Home</Link>
            <Link to="/important">Important</Link>
            <Link to="/checked">Checked</Link>
            <Switch>
              <Route path="/">
                <div>Hello</div>
                <div className="App">
                  <div className={"container"}>
                    
                    <ModalDelete
                      setModalDeleteOpen={setModalDeleteOpen}
                      isModalDeleteOpen={isModalDeleteOpen}
                      triggerModalDelete={triggerModalDelete}
                      acceptTodo={acceptTodo}
                      removeTodo={removeTodo}
                      removeAllChecked={removeAllChecked}
                    />
                    <Modal
                      setInputValue={setInputValue}
                      setModalOpen={setModalOpen}
                      isModalOpen={isModalOpen}
                      inputValue={inputValue}
                      addTodo={addTodo}
                    />
                  </div>
                </div>
              </Route>
              <Route path="/important">
                <AllImportant />
              </Route>
              <Route path="/checked">
                <AllChecked />
              </Route>
            </Switch>
            <button className={"nightButton"} onClick={triggerNight}>
              <FontAwesomeIcon className={"iconMoonNight"} icon={isDay ? faSun : faMoon} size="4x" />
            </button>
          </div>
        </nav>
      </div>
    </Router> */
  )
}

export default App
