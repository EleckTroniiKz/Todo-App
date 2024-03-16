import { Todo } from './Todo';
import { mount } from 'cypress/react';

describe('Todo', () => {
  const task = { id: 0, completed: false, task: "Task" };
  let toggleComplete;
  let deleteTodo;
  let editTodo;

  beforeEach(() => {
    toggleComplete = cy.stub();
    deleteTodo = cy.stub();
    editTodo = cy.stub();
    mount(<Todo task={task} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />);
  });

  it('renders', () => {
    cy.get('.Todo').should('contain', 'Task');
  });

  it('calls toggleComplete when the complete button is clicked', () => {
    cy.get('p').click();
    cy.wrap(toggleComplete).should('have.been.calledWith', task.id);
  });

  it('calls deleteTodo when the delete button is clicked', () => {
    cy.get('.delete-icon').click();
    cy.wrap(deleteTodo).should('have.been.calledWith', task.id);
  });

  it('calls editTodo when the edit button is clicked', () => {
    cy.get('.edit-icon').click();
    cy.wrap(editTodo).should('have.been.calledWith', task.id);
  });
});