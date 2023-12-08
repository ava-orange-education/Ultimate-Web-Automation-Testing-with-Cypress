
describe('Alias scope', () => {
    beforeEach(() => {
      cy.get('#submit-button').as('submitButton');
    });
  
    it('test one', () => {
      cy.get('@submitButton').click();
    });
  
    it('test two', () => {
      cy.get('@submitButton').click();
    });
  });
  