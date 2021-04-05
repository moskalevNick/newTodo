import React, {useState, useEffect, useMemo} from "react"
import {useDispatch, useSelector} from 'react-redux'

import {setTodos, removeTodo, addTodo, changeTodo, removeAllChecked} from '../../redux/actions'
import TodoList from "../TodoList"
import Meter from "../Meter"
import Modal from "../Modal"
import ModalDelete from "../ModalDelete"
import "./styles.css"

const Container = ({type="main"}) => {
	const [amount, setAmount] = useState(0)
	const [isModalOpen, setModalOpen] = useState(false)
	const [checkedTodo, setCheckedTodo] = useState(0)
	const [isModalDeleteOpen, setModalDeleteOpen] = useState(false)
 	const [acceptTodo, setAcceptTodo] = useState({})
	const [inputValue, setInputValue] = useState("")
  
  const dispatch = useDispatch()
  const { todos } = useSelector(state => state)
    
  useEffect(() => {
    const checked = todos.filter((todo) => todo.checked === true)
    setCheckedTodo((checked.length / todos.length) * 100)
    setAmount(todos.length)
  }, [todos])

  useEffect(() => {
    dispatch(setTodos())    
  }, [dispatch])

  const currentTodos = useMemo(() => {
    if (type === "important") {
      return todos.filter((todo) => todo.important === true)  
    } else if (type === "checked") {
      return todos.filter((todo) => todo.checked === true) 
    } else {
      return todos
    }
  }, [todos, type])
    

	const triggerModal = () => {
    setModalOpen((prev) => !prev)
  }

	const triggerModalDelete = (data) => {
    setModalDeleteOpen((prev) => !prev)
    setAcceptTodo(data)
  } 

  const changeCurrentTodo = (id, type) => {
    dispatch(changeTodo(id, type))
  }

	const addNewTodo = () => {
    dispatch(addTodo( { todo: inputValue, important: false, checked: false } ))
    setModalOpen(false)
    setInputValue("")
  }

	const removeTodoById = (id) => {
    dispatch(removeTodo(id))
    setModalDeleteOpen(false)
  }

	const removeCheckedTodos = async () => {
    dispatch(removeAllChecked())
    setModalDeleteOpen(false)
  } 

	return (
    <div className="box">
			<div className={"amount"}>
   			<h1 className={"title"}>you have {amount} goals</h1>
        <button className={"plus"} onClick={triggerModal}>
          +
        </button> 
      </div>     
			<TodoList 
        todos={currentTodos}
        changeTodo={changeCurrentTodo}
        triggerModalDelete={triggerModalDelete}
      />
      <Meter checkedTodo={checkedTodo}/>
			<ModalDelete
        setModalDeleteOpen={setModalDeleteOpen}
        isModalDeleteOpen={isModalDeleteOpen}
        triggerModalDelete={triggerModalDelete}
        acceptTodo={acceptTodo}
        removeTodo={removeTodoById}
        removeAllChecked={removeCheckedTodos}
      />
      <Modal
        setInputValue={setInputValue}
        setModalOpen={setModalOpen}
        isModalOpen={isModalOpen}
        inputValue={inputValue}
        addTodo={addNewTodo}
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