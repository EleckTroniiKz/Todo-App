import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import InputButton from './InputButton';

describe("InputButton", () => {
    const mockSetValue = jest.fn();

    test("should render the component", () => {
        render(<InputButton value="" setValue={mockSetValue} />);
        const inputElement = screen.getByTestId('todo-input');
        const buttonElement = screen.getByTestId('submit-btn');
        expect(inputElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
    });
});