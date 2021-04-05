import React from "react"
import "./styles.css"
import {IonModal} from "@ionic/react"

const ModalDelete = ({ isModalDeleteOpen, removeTodo, acceptTodo, setModalDeleteOpen, removeAllChecked }) => {
  return (
    <IonModal isOpen={isModalDeleteOpen} >
      <div className={"openedModal"}>
        <div className={"titleModal"}>
          Are you sure, you wanna delete {acceptTodo._id ? `"${acceptTodo.todo}"` : "all checked todos"} ?
        </div>
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
    </IonModal>
  )
}

export default ModalDelete
