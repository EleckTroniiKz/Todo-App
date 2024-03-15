describe('template spec', () => {
  it('passes', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="todo-input"]').clear('F');
    cy.get('[data-testid="todo-input"]').type('First Task');
    cy.get('[data-testid="submit-btn"]').click();
    /* ==== End Cypress Studio ==== */
    cy.get('[data-testid="Todo"]').should('exist');
  })

  it('deletes todo after clicking on delete button', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="todo-input"]').clear('F');
    cy.get('[data-testid="todo-input"]').type('First Todo To Be Deleted');
    cy.get('[data-testid="submit-btn"]').click();
    cy.get('[data-testid="delete-icon"] > path').click();
    /* ==== End Cypress Studio ==== */
    cy.get('[data-testid="Todo"]').should('not.exist');
  })
})