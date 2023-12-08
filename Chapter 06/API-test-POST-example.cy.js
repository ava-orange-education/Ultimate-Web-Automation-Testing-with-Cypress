describe('PUT Request Test', () => {
    it('Validate the update of an existing resource', () => {
      const authToken = 'YOUR_AUTH_TOKEN_HERE'; // Replace with your token
  
      cy.request({
        method: 'PUT',
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        body: {
          id: 1,
          title: 'Updated Title',
          body: 'Updated Body',
          userId: 1
        },
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .its('status')
      .should('eq', 200);
    });
  });
  