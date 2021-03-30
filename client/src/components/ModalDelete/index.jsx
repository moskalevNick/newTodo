import React from "react"
import "./styles.css"

const ModalDelete = ({ isModalDeleteOpen, removeTodo, acceptTodo, setModalDeleteOpen, removeAllChecked }) => {
  return (
    <div className={isModalDeleteOpen ? "modalDelete" : "blocked-modal"}>
      <div className={"box"}>
        Are you sure, you wanna delete {acceptTodo._id ? `"${acceptTodo.todo}"` : "all checked todos"} ?
        <div className={"buttonsDelete"}>
          <button className={"sure-button"} onClick={
            acceptTodo._id ? removeTodo.bind(null, acceptTodo._id) : removeAllChecked.bind(null, acceptTodo)}>
            sure
          </button>
          <button className={"cancel-button"} onClick={setModalDeleteOpen.bind(null, false)}>
            cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalDelete
