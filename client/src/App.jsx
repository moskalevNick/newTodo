import React, { useState, useEffect } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Modal from './component/Modal';

const uri = 'http://localhost:7000';

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [amount, setAmount] = useState(0)
  const [checkedTodo, setCheckedTodo] = useState(0)
  const [isModalOpen, setModalOpen] = useState(false)

  const addTodo = async () => {
    const t = await fetch(uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ todo: inputValue, important: false, checked: false }),
    })
    const response = await t.json()
    setTodos(response)
    setInputValue("")
    setAmount(response.length)
    setModalOpen(false)
  }

  const changeTodo = async (id, type) => {
    const response = await fetch(`${ uri }/${ id }`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ type: type }),
    })
    const data = await response.json()
    setTodos(data)
    setAmount(data.length)
  }

  const removeTodo = async (id) => {
    const response = await fetch(`${ uri }/${ id }`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    const data = await response.json()
    setTodos(data)
    setAmount(data.length)
  }

  const removeAllChecked = async () => {
    const response = await fetch( uri, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    const data = await response.json()
    setTodos(data)
    setAmount(data.length)
  }

  useEffect(() => {
    fetch(uri)
      .then((response) => response.json())
      .then((data) => {
        setAmount(data.length)
        setTodos(data)
      })
  }, [])

  useEffect(() => {
    const checked = todos.filter((todo) => todo.checked === true)
    setCheckedTodo((checked.length / todos.length) * 100)
  }, [todos])

  const triggerModal = () => {
    setModalOpen((prev) => !prev)
  }

  return (
    <div className={ 'App' }>

      <div className={ 'container' }>

        <div className={ 'amount' }>

          <h1 className={ 'title' }>
            now { amount } goals
          </h1>
          <button
            className={ 'plus' }
            onClick={ triggerModal }
          >
            +
          </button>

        </div>

        <div className={ 'list' }>
          { todos.map( ( element ) => (
            <div key={ element._id } className={ 'todo' }>
              <input
                type={ 'checkbox' }
                checked={ element.checked }
                onChange={ changeTodo.bind( null, element._id, "checked" ) }
              />
              <div
                className={ element.important ? "important" : "label" }
                onClick={ changeTodo.bind( null, element._id, "important" ) }
              >
                { element.todo }
              </div>
              <button
                className={ 'delete' }
                onClick={ removeTodo.bind( null, element._id ) }
              >
                <FontAwesomeIcon className={ 'icon' } icon={ faTrash } />
              </button>
            </div>
          ) ) }
        </div>

        <div className={ 'stat' }>
          <meter
            value={ checkedTodo || 0 }
            className={ 'meter' }
            optimum={ '70' }
            max={ '100' }
            low={ '50' }
          />
          <button
            className="deleteChecked"
            onClick={ removeAllChecked }
          >
            delete all checked
          </button>
        </div>

        <Modal
          setInputValue={ setInputValue }
          setModalOpen={ setModalOpen }
          isModalOpen={ isModalOpen }
          inputValue={ inputValue }
          addTodo={ addTodo }
        />


      </div>


    </div>
  )
}

export default App
