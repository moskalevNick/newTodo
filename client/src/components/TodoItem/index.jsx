import React from "react"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./styles.css"


const TodoItem = ( {element, changeTodo, triggerModalDelete} ) => {
    
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