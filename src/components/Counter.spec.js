import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './Counter';

describe("Counter", () => {
    test("should render the component", () => {
        render(<Counter todos={[]}/>);
        const counterElement = screen.getByTestId('Counter');
        expect(counterElement).toBeInTheDocument();
    });

    test("should correctly count completed todos", () => {
        const todos = [
            { completed: true },
            { completed: false },
            { completed: true },
        ];
        render(<Counter todos={todos}/>);
        const completedTodos = screen.getByTestId('completed-todos');
        expect(completedTodos.textContent).toContain('2');
    });

    test("should correctly count uncompleted todos", () => {
        const todos = [
            { completed: true },
            { completed: false },
            { completed: false },
        ];
        render(<Counter todos={todos}/>);
        const uncompletedTodos = screen.getByTestId('uncompleted-todos');
        expect(uncompletedTodos.textContent).toContain('2');
    });

    test("should correctly count all todos", () => {
        const todos = [
            { completed: true },
            { completed: false },
            { completed: false },
            { completed: true },
            { completed: false },
            { completed: true },
        ];
        render(<Counter todos={todos}/>);
        const uncompletedTodos = screen.getByTestId('todos');
        expect(uncompletedTodos.textContent).toContain('6');
    });
});