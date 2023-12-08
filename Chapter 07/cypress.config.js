// Cypress test file
describe.only('Data-Driven Tests with Database Data', () => {
    it('should perform some data-driven tests', () => {
      cy.task('getActiveUsers').then((users) => {
        users.forEach((user) => {
          cy.visit('https://example.cypress.io');
          cy.get('#username').type(user.username);
          cy.get('#password').type(user.password);
          cy.get('#login-button').click();
          cy.contains('Login Successful').should('be.visible');
        });
      });
    });
  });
  
  