import { mount } from 'cypress/react';
import InputButton from './InputButton';

describe('InputButton', () => {
  let setValue;

  beforeEach(() => {
    setValue = cy.stub();
    mount(<InputButton value="" setValue={setValue} />);
  });

  it('calls setValue when the input changes', () => {
    const newValue = 'A';
    cy.get('[data-testid="todo-input"]').type(newValue);
    cy.wrap(setValue).should('be.calledWith', newValue);
  });

  it('Button is visible after submission', () => {
    cy.get('[data-testid="submit-btn"]').click().should('be.visible');
  });
});