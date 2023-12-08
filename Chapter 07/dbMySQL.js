// Creating a custom command
Cypress.Commands.add('login', (username, password) => {
    cy.visit('/login');
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
  });
  
//   Custom command overwrites
  Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    console.log(`Visiting: ${url}`);
    originalFn(url, options);
  });
  
//   Asynchronous custom commands
Cypress.Commands.add('createUser', (username, email) => {
    return new Cypress.Promise((resolve, reject) => {
      cy.request('POST', '/users', { username, email }).then((response) => {
        if (response.status === 201) {
          resolve(response.body);
        } else {
          reject(`Failed to create user: ${response.body}`);
        }
      });
    });
  });

//   Chaining custom commands
Cypress.Commands.add('loginAndVisitDashboard', (username, password) => {
    cy.login(username, password);
    cy.visit('/dashboard');
  });

//   Passing options to custom commands
Cypress.Commands.add('login', (username, password, options = {}) => {
    cy.visit(options.loginUrl || '/login');
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
  });

// Custom commands with aliases
Cypress.Commands.add('fetchUser', (userId) => {
    cy.request(`/users/${userId}`).as('user');
  });

//   Logging in
