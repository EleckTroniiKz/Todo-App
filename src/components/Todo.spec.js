import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Todo } from './Todo';

describe("Todo", () => {
    const mockToggleComplete = jest.fn();
    const mockDeleteTodo = jest.fn();
    const mockEditTodo = jest.fn();

    test("should render the component", () => {
        render(<Todo task={{id: 1, task: "Test task", completed: false}} toggleComplete={mockToggleComplete} deleteTodo={mockDeleteTodo} editTodo={mockEditTodo} />);
        const todoElement = screen.getByText('Test task');
        expect(todoElement).toBeInTheDocument();
    });

    test("should call toggleComplete when task is clicked", () => {
        render(<Todo task={{id: 1, task: "Test task", completed: false}} toggleComplete={mockToggleComplete} deleteTodo={mockDeleteTodo} editTodo={mockEditTodo} />);
        const todoElement = screen.getByText('Test task');
        userEvent.click(todoElement);
        expect(mockToggleComplete).toHaveBeenCalledWith(1);
    });

    test("should call deleteTodo when delete icon is clicked", () => {
        render(<Todo task={{id: 1, task: "Test task", completed: false}} toggleComplete={mockToggleComplete} deleteTodo={mockDeleteTodo} editTodo={mockEditTodo} />);
        const deleteIcon = screen.getByTestId('delete-icon');
        userEvent.click(deleteIcon);
        expect(mockDeleteTodo).toHaveBeenCalledWith(1);
    });

    test("should call editTodo when edit icon is clicked", () => {
        render(<Todo task={{id: 1, task: "Test task", completed: false}} toggleComplete={mockToggleComplete} deleteTodo={mockDeleteTodo} editTodo={mockEditTodo} />);
        const editIcon = screen.getByTestId('edit-icon');
        userEvent.click(editIcon);
        expect(mockEditTodo).toHaveBeenCalledWith(1);
    });
});