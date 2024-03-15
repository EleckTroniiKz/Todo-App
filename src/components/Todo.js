import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className="Todo" data-testid="Todo">
        <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`} >
            {task.task}
        </p>
        <div>
            <FontAwesomeIcon className="edit-icon" data-testid="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
            <FontAwesomeIcon className="delete-icon" data-testid="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)}/>

        </div>
    </div>
  )
}
