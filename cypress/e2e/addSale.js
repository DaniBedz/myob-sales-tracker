import {generateUser, generateTask} from '../support/generate';

describe ('sales list', () => {
  it('can add a sale', () => {
    const user = generateUser();
    const task = generateTask();
    cy.visit('/');
    cy.findByPlaceholderText(/add/i).click();
    console.log(user);
    console.log(task);
  })
});