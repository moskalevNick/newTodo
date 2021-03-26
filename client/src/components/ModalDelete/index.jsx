import React from "react"

const ModalDelete = ({ isModalDeleteOpen, removeTodo, acceptTodo, setModalDeleteOpen, removeAllChecked }) => {
  return (
    <div className={isModalDeleteOpen ? "modalDelete" : "blocked-modal"}>
      <div className={"container"}>
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
