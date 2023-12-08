describe('Data-Driven Registration Test', () => {
    before(() => {
      cy.fixture('testData.json').as('testData'); // Alias the testData
    });
  
    it('Register new users from testData', function () {
      // The function notation allows you to use 'this.testData'
      // which is set by the use of the alias in the before hook.
      this.testData.forEach((data) => {
        cy.visit('/register');
        cy.get('#first-name').type(data.firstName);
        cy.get('#last-name').type(data.lastName);
        cy.get('#email').type(data.email);
        cy.get('#password').type(data.password);
        cy.get('#register-button').click();
        cy.contains('Registration Successful').should('be.visible');
      });
    });
  });
  