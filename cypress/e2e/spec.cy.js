describe('Todo App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // replace with your app's url
  });

  it('adds a new todo', () => {
    cy.get('.todo-input').type('New task');
    cy.get('.submit-btn').click();
    cy.get('.Todo').should('contain', 'New task');
  });

  it('deletes a todo', () => {
    cy.get('.todo-input').type('New task');
    cy.get('.submit-btn').click();
    cy.get('.delete-icon').first().click();
    cy.get('.Todo').should('not.exist');
  });

  it('edits a todo', () => {
    cy.get('.todo-input').type('New task');
    cy.get('.submit-btn').click();
    cy.get('.edit-icon').first().click();
    cy.get('.edit-todo-input').clear().type('Updated task');
    cy.get('.edit-todo-btn').click();
    cy.get('.Todo').should('contain', 'Updated task');
  });

  it('marks a todo as completed', () => {
    cy.get('.todo-input').type('New task');
    cy.get('.submit-btn').click();
    cy.get('.Todo').find('p').first().click();
    cy.get('.Todo').find('p').first().should('have.class', 'completed');
  });

  it('marks a completed todo as incomplete', () => {
    cy.get('.todo-input').type('New task');
    cy.get('.submit-btn').click();
    cy.get('.Todo').find('p').first().click();
    cy.get('.Todo').find('p').first().click();
    cy.get('.Todo').find('p').first().should('not.have.class', 'completed');
  });
});