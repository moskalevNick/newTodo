/* import React, { useState, useEffect } from "react"
import { faMoon, faSun, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Router, Route, Switch, Link } from "react-router-dom"

import Modal from "./component/Modal"
import ModalDelete from "./component/ModalDelete"
import AllImportant from "./component/AllImportant"
import AllChecked from "./component/AllChecked"

const uri = process.env.REACT_APP_API_URL

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [amount, setAmount] = useState(0)
  const [checkedTodo, setCheckedTodo] = useState(0)
  const [isModalOpen, setModalOpen] = useState(false)
  const [isDay, setDay] = useState(true)
  const [isModalDeleteOpen, setModalDeleteOpen] = useState(false)
  const [acceptTodo, setAcceptTodo] = useState({})


  const addTodo = async () => {
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

  const triggerModal = () => {
    setModalOpen((prev) => !prev)
  }

  const triggerModalDelete = (data) => {
    setModalDeleteOpen((prev) => !prev)
    setAcceptTodo(data)
  }

  const triggerNight = () => {
    setDay((prev) => !prev)
  }

  return (
    <Router>
    <div className={isDay ? "day" : "night"}>
      <div className="navBar">
        <Link to="/">Home</Link>
        <Link to="/important">Important</Link>
        <Link to="/checked">Checked</Link>
        <Switch>
          <Route path='/'><div>Hello</div>
       <div className="App">
        <div className={"container"}>
          <div className={"amount"}>
            <h1 className={"title"}>you have {amount} goals</h1>
            <button className={"plus"} onClick={triggerModal}>
              +
            </button>
          </div>
          <div className={"list"}>
            {
              todos.length === 0 && <p className={"noTodos"}>there are no todos yet</p>
            }
            {todos.map((element) => (
              <div key={element._id} className={"todo"}>
                <input type={"checkbox"} checked={element.checked} onChange={changeTodo.bind(null, element._id, "checked")} />
                <div className={element.important ? "important" : "label"} onClick={changeTodo.bind(null, element._id, "important")}>
                  {element.todo}
                </div>
                <button className={"delete"} onClick={triggerModalDelete.bind(null, element)}>
                  <FontAwesomeIcon className={"icon"} icon={faTrash} />
                </button>
              </div>
            ))}
          </div>
          <meter value={checkedTodo || 0} className={"meter"} max="100" low="33" high="66" optimum="80" />
          <div className={"stat"}>
            <button className="deleteChecked" onClick={triggerModalDelete} disabled={!checkedTodo}>
              delete all checked
            </button>
          </div>
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
          <Route path='/important'><AllImportant/></Route>
          <Route path='/checked'><AllChecked/></Route>
        </Switch>
        <button className={"nightButton"} onClick={triggerNight}>
          <FontAwesomeIcon className={"iconMoonNight"} icon={isDay ? faSun : faMoon} size="4x" />
        </button>
      </div>
    </div>
  </Router>
  )
}

export default App
 */

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllChecked from "./component/AllChecked";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
          <AllChecked />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return 
}

function Users() {
  return <h2>Users</h2>;
}