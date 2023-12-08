describe('GraphQL API Test', () => {
    it('Fetch User Data', () => {
      const authToken = 'YOUR_AUTH_TOKEN_HERE'; // Replace with your token
  
      const query = `
        {
          user(id: "1") {
            name
            email
          }
        }
      `;
  
      cy.request({
        url: '/graphql', // replace with your GraphQL endpoint
        method: 'POST',
        body: { query },
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.data.user.name).to.exist;
        expect(response.body.data.user.email).to.exist;
      });
    });
  });
  
  