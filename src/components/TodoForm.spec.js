import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { TodoForm } from './TodoForm';

describe("TodoForm", () => {
    const mockAddTodo = jest.fn();

    test("should render the component", () => {
        render(<TodoForm addTodo={mockAddTodo} />);
        const formElement = screen.getByTestId('todo-form');
        expect(formElement).toBeInTheDocument();
    });

    test("should call addTodo on form submission", () => {
        render(<TodoForm addTodo={mockAddTodo} />);
        const inputElement = screen.getByTestId('todo-input');
        userEvent.type(inputElement, 'New task');
        const buttonElement = screen.getByTestId('submit-btn');
        userEvent.click(buttonElement);
        expect(mockAddTodo).toHaveBeenCalledWith('New task');
    });
});