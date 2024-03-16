import React, {useState} from 'react'
import InputButton from './InputButton'

const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!value) return

        addTodo(value)
        setValue('')
    }


    return (
        <form className="TodoForm" data-testid="todo-form" onSubmit={handleSubmit}>
            <InputButton value={value} setValue={setValue}/>
        </form>
    )
}

export default TodoForm;
