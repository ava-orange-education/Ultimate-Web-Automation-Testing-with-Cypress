cy.request({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'POST',
    body: { title: 'Mock title', body: 'Mock body', userId: 1 },
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    response: { title: 'Mock title', body: 'Mock body', userId: 1, id: 101 }
  })
  
  // Mocking with cy.intercept()
  cy.intercept('GET', '/posts/1', { fixture: 'post.json' }).as('getPost')
  