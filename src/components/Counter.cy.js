import { mount } from 'cypress/react';
import Counter from './Counter';

describe('Counter', () => {
  const todos = [
    { id: 1, completed: true, task: "Task 1" },
    { id: 2, completed: false, task: "Task 2" },
    { id: 3, completed: true, task: "Task 3" },
    { id: 4, completed: false, task: "Task 4" },
    { id: 5, completed: true, task: "Task 5" },
  ];

  beforeEach(() => {
    mount(<Counter todos={todos} />);
  });

  it('counts total todos', () => {
    cy.get('[data-testid="todos"]').should('contain', '5');
  });

  it('counts completed todos', () => {
    cy.get('[data-testid="completed-todos"]').should('contain', '3');
  });

  it('counts incomplete todos', () => {
    cy.get('[data-testid="uncompleted-todos"]').should('contain', '2');
  });
});