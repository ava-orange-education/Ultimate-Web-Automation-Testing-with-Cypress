describe('GET Request Test', () => {
    it('Validate the status code', () => {
      const authToken = 'YOUR_AUTH_TOKEN_HERE'; // Replace with your token
  
      cy.request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      })
      .its('status')
      .should('eq', 200);
    });
  });
  