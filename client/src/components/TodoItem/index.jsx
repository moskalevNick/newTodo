import React from "react"
import {IonCheckbox, IonButton} from "@ionic/react"

import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./styles.css"


const TodoItem = ( {element, changeTodo, triggerModalDelete} ) => {
  if (!element){
    return null
  }
  return (
    <div className={"todo"}>
      <IonCheckbox slot="start" color="danger"
        checked={element.checked}
        onIonChange={changeTodo.bind(null, element._id, "checked")} 
      />
      <div 
				className={ element.important ? "important" : "label" } 
				onClick={ changeTodo.bind(null, element._id, "important") }
			>
        { element.todo }
      </div>
      <IonButton 
        className={"deleteButton"} 
        onClick={triggerModalDelete.bind(null, element)}>
        <FontAwesomeIcon 
				  className={"icon"} 
				  icon={faTrash} 
			  />
      </IonButton>
    </div>
  )
}

export default TodoItem 