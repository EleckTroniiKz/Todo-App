
export const Counter = ({todos}) => {

    return (
        <div className="Counter">
            <p>Uncompleted: {todos.filter(todo => !todo.completed).length}</p>
            <p>Completed: {todos.filter(todo => todo.completed).length}</p>
        </div>
    )
}