import { mount } from 'cypress/react';
import { TodoForm } from './TodoForm';

describe('TodoForm', () => {
  let addTodo;

  beforeEach(() => {
    addTodo = cy.stub();
    mount(<TodoForm addTodo={addTodo} />);
  });

  it('calls addTodo when the form is submitted', () => {
    const newValue = 'New Task';
    cy.get('[data-testid="todo-input"]').type(newValue);
    cy.get('[data-testid="todo-form"]').submit();
    cy.wrap(addTodo).should('be.calledWith', newValue);
  });

  it('clears the input field after form submission', () => {
    const newValue = 'New Task';
    cy.get('[data-testid="todo-input"]').type(newValue).should('have.value', newValue);
    cy.get('[data-testid="todo-form"]').submit();
    cy.get('[data-testid="todo-input"]').should('have.value', '');
  });
});