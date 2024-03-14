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
});