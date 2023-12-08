describe('Data-Driven Login Test', () => {
    const testData = [
      {username: 'user1', password: 'pass1'},
      {username: 'user2', password: 'pass2'},
      {username: 'user3', password: 'pass3'},
    ]
  
    testData.forEach((data) => {
      it(`Login test for ${data.username}`, () => {
        cy.visit('/login')
        cy.get('#username').type(data.username)
        cy.get('#password').type(data.password)
        cy.get('#login-button').click()
        cy.contains('Login Successful').should('be.visible')
      })
    })
  })
  