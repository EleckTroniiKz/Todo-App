import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import EditTodoForm from './EditTodoForm';

describe("EditTodoForm", () => {
    const mockEditTodo = jest.fn();

    test("should render the component", () => {
        render(<EditTodoForm task="Test task" editTodo={mockEditTodo} />);
        const formElement = screen.getByTestId('edit-todo-form');
        expect(formElement).toBeInTheDocument();
    });

    test("should call editTodo on form submission", () => {
        render(<EditTodoForm task={{id: 5, completed: false, task: ""}} editTodo={mockEditTodo} />);
        const buttonElement = screen.getByTestId('edit-todo-btn');
        const inputElement = screen.getByTestId('edit-todo-input');
        userEvent.type(inputElement, 'New task');
        userEvent.click(buttonElement);
        expect(mockEditTodo).toHaveBeenCalled();
    });

    test("should update input value on change", () => {
        render(<EditTodoForm task="Test task" editTodo={mockEditTodo} />);
        const inputElement = screen.getByTestId('edit-todo-input');
        userEvent.type(inputElement, 'New task');
        expect(inputElement.value).toBe('New task');
    });
});