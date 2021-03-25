import React, {useState} from "react"
import TodoList from "../TodoList"

export const Container = () => {
	const [amount, setAmount] = useState(0)
	const [isModalOpen, setModalOpen] = useState(false)
	const [todos, setTodos] = useState([])
	const [checkedTodo, setCheckedTodo] = useState(0)
	const [isModalDeleteOpen, setModalDeleteOpen] = useState(false)
  const [acceptTodo, setAcceptTodo] = useState({})

	/* const triggerModal = () => {
    setModalOpen((prev) => !prev)
  }

	const triggerModalDelete = (data) => {
    setModalDeleteOpen((prev) => !prev)
    setAcceptTodo(data)
  } */

	return (
    <div className="container">
			<div className={"amount"}>
      	<h1 className={"title"}>you have {amount} goals</h1>
        {/* <button className={"plus"} onClick={triggerModal}>
            +
          </button> */}
        </div>     
				<TodoList todos={todos}/>
        <div className={"stat"}>
          {/* <button 
						className="deleteChecked" 
						onClick={triggerModalDelete} 
						disabled={!checkedTodo}
					>
						delete all checked
          </button> */}
        </div>
			</div>
    )
}

