import React from "react"

const Modal = ({addTodo, inputValue, setInputValue}) => {

  return (
    <div className="modal">
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
      <button
        className="Add"
        onClick={addTodo}
        disabled={!inputValue.trim()}
      >
        +
      </button> 
    </div>
  )
}

export default Modal
