import React from 'react';

const Counter = ({todos}) => {

    return (
        <>
        <div className="Counter" data-testid="Counter" >
            <p data-testid="uncompleted-todos">Uncompleted: {todos.filter(todo => !todo.completed).length}</p>
            <p data-testid="completed-todos">Completed: {todos.filter(todo => todo.completed).length}</p>
        </div>
        <div className="Counter" label="Counter">
            <p data-testid="todos">Total: {todos.length}</p>
        </div>
        </>
    )
}

export default Counter;