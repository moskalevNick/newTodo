import React from "react"

const ModalDeleteChecked = ({ isModalDeleteCheckedOpen, removeAllChecked, acceptTodo, setModalDeleteCheckedOpen }) => {
  return (
    <div className={isModalDeleteCheckedOpen ? "modalDeleteChecked" : "blocked-modal"}>
      <div className={"container"}>
        Are you sure, you wanna delete checked todos ?
        <button className={"sure-button"} onClick={removeAllChecked.bind(null, acceptTodo._id)}>
          sure
        </button>
        <button className={"cancel-button"} onClick={setModalDeleteCheckedOpen.bind(null, false)}>
          cancel
        </button>
      </div>
    </div>
  )
}

export default ModalDeleteChecked
