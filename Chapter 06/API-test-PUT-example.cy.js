describe('DELETE Request Test', () => {
    it('Validate the deletion of a resource', () => {
      const authToken = 'YOUR_AUTH_TOKEN_HERE'; // Replace with your token
  
      cy.request({
        method: 'DELETE',
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      })
      .its('status')
      .should('eq', 200);
    });
  });
  