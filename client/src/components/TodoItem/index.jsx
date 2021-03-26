import React from "react"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./styles.css"

const TodoItem = ( {element} ) => {
  const uri = process.env.REACT_APP_API_URL

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

  const triggerModalDelete = (data) => {
    setModalDeleteOpen((prev) => !prev)
    setAcceptTodo(data) 
  }
  
  if (!element){
    return null
  }
  return (
    <div className={"todo"}>
      <input 
				type={"checkbox"} 
        checked={element.checked}
        onChange={changeTodo.bind(null, element._id, "checked")} 
      />
      <div 
				className={ element.important ? "important" : "label" } 
				onClick={ changeTodo.bind(null, element._id, "important") }
			>
        { element.todo }
      </div>
      <button 
				className={"delete"} 
				onClick={triggerModalDelete.bind(null, element)}
			>
      	<FontAwesomeIcon 
					className={"icon"} 
					icon={faTrash} 
				/>
      </button>
    </div>
  )
}

export default TodoItem 