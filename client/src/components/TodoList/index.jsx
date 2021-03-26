import React from "react"
import TodoItem from "../TodoItem"
import "./styles.css"

const TodoList = ( {todos} ) => {
  return (
      <div className={"list"}>
          {todos.length === 0 && <p className={"noTodos"}>there are no todos yet</p>}
          {todos.map((element) => (
            <TodoItem 
              key={element._id} 
              element={element} 
            />
          ))}
      </div>
  )
}

export default TodoList