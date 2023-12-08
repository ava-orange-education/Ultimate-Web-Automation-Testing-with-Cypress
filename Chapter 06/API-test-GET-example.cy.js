describe('POST Request Test', () => {
    it('Validate the creation of a new resource', () => {
      const authToken = 'YOUR_AUTH_TOKEN_HERE'; // Replace with your token
  
      cy.request({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        body: {
          title: 'Test Title',
          body: 'Test Body',
          userId: 1
        },
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .its('status')
      .should('eq', 201);
    });
  });
  