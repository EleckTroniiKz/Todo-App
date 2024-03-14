import React, {useState} from 'react'

const EditTodoForm = ({editTodo, task}) => {

    const [value, setValue] = useState(task.task)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!value) return

        editTodo(value, task.id)

        setValue('')
    }


    return (
        <form className="ToDoForm" onSubmit={handleSubmit} data-testid="edit-todo-form">
            <input type='text' className="edit-todo-input" value={value} data-testid="edit-todo-input" placeholder="Update Task" onChange={(e) => setValue(e.target.value)}/>
            <button className="edit-todo-btn" data-testid="edit-todo-btn" type="submit">Update Task</button>
        </form>
    )
}

export default EditTodoForm;
