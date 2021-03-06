import React from "react"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Modal = ({ addTodo, inputValue, setInputValue, isModalOpen, setModalOpen }) => {
  return (
    <div className={isModalOpen ? "modal" : "blocked-modal"}>
      <div className={"container"}>
        <div className={"close-button-block"}>
          <button className={"close-button"} onClick={setModalOpen.bind(null, false)}>
            <FontAwesomeIcon className={"iconX"} icon={faTimes} />
          </button>
        </div>
        <input
          className="inputWindow"
          placeholder="Add your new todo"
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
    </div>
  )
}

export default Modal
