import React from "react"

const ModalDelete = ({ isModalDeleteOpen, removeTodo, acceptTodo, setModalDeleteOpen }) => {
  return (
    <div className={isModalDeleteOpen ? "modalDelete" : "blocked-modal"}>
      <div className={"container"}>
        Are you sure, you wanna delete "{acceptTodo.todo}" ?
        <button className={"sure-button"} onClick={removeTodo.bind(null, acceptTodo._id)}>
          sure
        </button>
        <button className={"cancel-button"} onClick={setModalDeleteOpen.bind(null, false)}>
          cancel
        </button>
      </div>
    </div>
  )
}

export default ModalDelete
