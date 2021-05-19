describe ('sales list', () => {
  it('can add a sale', () => {
    cy.visit('/');
    cy.findByPlaceholderText(/add/i).click();
  })
});