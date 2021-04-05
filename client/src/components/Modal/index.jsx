import React from "react"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {IonModal} from "@ionic/react"

import "./styles.css"

const Modal = ({ addTodo, inputValue, setInputValue, isModalOpen, setModalOpen }) => {
  return (
    <IonModal isOpen={isModalOpen} cssClass={"modal"}>
      <div className="openedModal">
        <button className={"close-button"} onClick={setModalOpen.bind(null, false)}>
          <FontAwesomeIcon className={"iconX"} icon={faTimes} />
        </button>
        <input
          className="inputWindow"
          placeholder="Write your new todo"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
          }}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              addTodo()
            }
          }}
        />
        <button className={inputValue.trim() ? "emptyAddModal" : "AddModal"} onClick={addTodo} disabled={!inputValue.trim()}>
          Add todo
        </button>
      </div>
    </IonModal>
  )
}

export default Modal
