import { mount } from 'cypress/react';
import EditTodoForm from './EditTodoForm';

describe('EditTodoForm', () => {
  const task = { id: 1, completed: false, task: "Task 1" };
  let editTodo;

  beforeEach(() => {
    editTodo = cy.stub();
    mount(<EditTodoForm task={task} editTodo={editTodo} />);
  });

  it('calls editTodo when the submit btn is clicked', () => {
    const newTask = 'New Task';
    cy.get('[data-testid="edit-todo-input"]').clear()
    cy.get('[data-testid="edit-todo-input"]').type(newTask);
    cy.get('[data-testid="edit-todo-btn"]').click();
    cy.wrap(editTodo).should('be.calledWith', newTask, task.id);
  });
});