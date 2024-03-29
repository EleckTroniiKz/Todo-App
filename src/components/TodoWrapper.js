import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid'
import Todo from './Todo'
import EditTodoForm from './EditTodoForm'
import Counter from './Counter'
import './TodoWrapper.css'
uuidv4()

const TodoWrapper = () => {

    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {

        setTodos([...todos, {id: uuidv4(), task: todo, completed: false}])
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleComplete = (id) => {
        setTodos(
            todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
        )
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
    }


    const editTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    return (
        <div className="TodoWrapper" data-testid="todo-wrapper">
            <h1> To-Do App Demo</h1>
            <TodoForm addTodo={addTodo}/>
            <Counter todos={todos} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} />
                ): 
                (<Todo key={index} task={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>)
            ))}

        </div>
    )
}

export default TodoWrapper;