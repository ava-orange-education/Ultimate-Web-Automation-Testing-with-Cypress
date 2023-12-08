describe('Outer block', () => {
    before(() => {
      cy.log('Runs before all tests in the outer block');
    });
  
    beforeEach(() => {
      cy.log('Runs before each test in the outer block');
    });
  
    describe('Inner block', () => {
      before(() => {
        cy.log('Runs before all tests in the inner block');
      });
  
      beforeEach(() => {
        cy.log('Runs before each test in the inner block');
      });
  
      it('does something', () => {
        // Test logic
      });
    });
  
    it('does something else', () => {
      // Test logic
    });
  });
  