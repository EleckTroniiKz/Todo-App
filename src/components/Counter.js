import React from 'react';
import './Counter.css';

const Counter = ({todos}) => {

    return (
        <>
        <div className="Counter" data-testid="Counter" >
            <p data-testid="uncompleted-todos"><span>Uncompleted: {todos.filter(todo => !todo.completed).length}</span></p>
            <p data-testid="completed-todos"><span>Completed: {todos.filter(todo => todo.completed).length}</span></p>
        </div>
        <div className="Counter" label="Counter">
            <p data-testid="todos"><span>Total: {todos.length}</span></p>
        </div>
        </>
    )
}

export default Counter;