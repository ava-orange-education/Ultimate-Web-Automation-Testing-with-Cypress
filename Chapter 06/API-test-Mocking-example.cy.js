cy.window().then((win) => {
    cy.stub(win, 'fetch').returns(Promise.resolve({
      json: () => ({ message: 'Stubbing successful' }),
      ok: true
    })).as('fetchStub')
  })
  cy.get('#fetch-button').click() // replace with the selector of your button
  cy.get('@fetchStub').should('be.calledOnce')
  