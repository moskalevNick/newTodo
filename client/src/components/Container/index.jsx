import React, {useState, useEffect} from "react"

import TodoList from "../TodoList"
import Meter from "../Meter"
import Modal from "../Modal"
import ModalDelete from "../ModalDelete"
import "./styles.css"
import TodoItem from "../TodoItem"

const uri = process.env.REACT_APP_API_URL

const Container = () => {
	const [amount, setAmount] = useState(0)
	const [isModalOpen, setModalOpen] = useState(false)
	const [todos, setTodos] = useState([])
	const [checkedTodo, setCheckedTodo] = useState(0)
	const [isModalDeleteOpen, setModalDeleteOpen] = useState(false)
 	const [acceptTodo, setAcceptTodo] = useState({})
	const [inputValue, setInputValue] = useState("")
	
  useEffect(() => {
    const checked = todos.filter((todo) => todo.checked === true)
    setCheckedTodo((checked.length / todos.length) * 100)
  }, [todos])

  useEffect(() => {
    fetch(uri)
      .then((response) => response.json())
      .then((data) => {
        setAmount(data.length)
        setTodos(data)
      })
  }, [])

	const triggerModal = () => {
    setModalOpen((prev) => !prev)
  }

	const triggerModalDelete = (data) => {
    setModalDeleteOpen((prev) => !prev)
    setAcceptTodo(data)
  } 

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

	return (
    <div className="container">
			<div className={"amount"}>
   			<h1 className={"title"}>you have {amount} goals</h1>
          <button className={"plus"} onClick={triggerModal}>
            +
          </button> 
      </div>     
			<TodoList todos={todos}/>
      <Meter checkedTodo={checkedTodo}/>
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
      <div className={"stat"}>
        <button 
					className="deleteChecked" 
					onClick={triggerModalDelete} 
					disabled={!checkedTodo}
				>
					delete all checked
        </button> 
      </div>
		</div>
  )
}

export default Container