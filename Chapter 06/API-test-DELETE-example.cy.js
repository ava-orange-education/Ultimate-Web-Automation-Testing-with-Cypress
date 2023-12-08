describe('Test with cy.intercept()', () => {
    it('Modify the response', () => {
      cy.intercept('https://jsonplaceholder.typicode.com/posts/1', {
        body: {
          id: 1,
          title: 'Mock Title',
          body: 'Mock Body',
          userId: 1
        }
      }).as('getPost')
  
      cy.visit('your website url') // replace with the URL of your web app
  
      cy.wait('@getPost').then((interception) => {
        assert.isNotNull(interception.response.body, 'API call has data')
      })
    })
  });
  