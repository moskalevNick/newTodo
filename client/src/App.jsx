import React, { useState, useEffect } from "react"
import { faMoon, faSun, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Modal from "./component/Modal"
import ModalDelete from "./component/ModalDelete"
import ModalDeleteChecked from "./component/ModalDeleteChecked"

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
  const [isModalDeleteCheckedOpen, setModalDeleteCheckedOpen] = useState(false)

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
    setModalDeleteCheckedOpen(false)
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

  const triggerModalDeleteChecked = () => {
    setModalDeleteCheckedOpen((prev) => !prev)
  }

  const triggerNight = () => {
    setDay((prev) => !prev)
  }

  return (
    <div className={isDay ? "day" : "night"}>
      <button className={"nightButton"} onClick={triggerNight}>
        <FontAwesomeIcon className={"iconMoonNight"} icon={isDay ? faSun : faMoon} size="4x" />
      </button>
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
            <button className="deleteChecked" onClick={triggerModalDeleteChecked} disabled={!checkedTodo}>
              delete all checked
            </button>
          </div>
          <ModalDeleteChecked
            setModalDeleteCheckedOpen={setModalDeleteCheckedOpen}
            isModalDeleteCheckedOpen={isModalDeleteCheckedOpen}
            triggerModalDeleteChecked={triggerModalDeleteChecked}
            acceptTodo={acceptTodo}
            removeAllChecked={removeAllChecked}
          />
          <ModalDelete
            setModalDeleteOpen={setModalDeleteOpen}
            isModalDeleteOpen={isModalDeleteOpen}
            triggerModalDelete={triggerModalDelete}
            acceptTodo={acceptTodo}
            removeTodo={removeTodo}
          />
          <Modal setInputValue={setInputValue} setModalOpen={setModalOpen} isModalOpen={isModalOpen} inputValue={inputValue} addTodo={addTodo} />
        </div>
      </div>
    </div>
  )
}

export default App
