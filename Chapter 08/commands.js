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
Cypress.Commands.add("login", (username, password) => {
    cy.visit('/login');
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
});

// Form filling

Cypress.Commands.add("fillForm", (name, email, password) => {
    cy.get('#name').type(name);
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.get('#confirmPassword').type(password);
});

// Navigating through the app

Cypress.Commands.add("navigateTo", (menu) => {
    cy.get('#menu-button').click();
    cy.contains(menu).click();
});

// Complex assertions

Cypress.Commands.add("assertUserCount", (count) => {
    cy.get('.user').should('have.length', count);
});

// Programmatic login
Cypress.Commands.add('login', (username, password) => {
    cy.request({
        method: 'POST',
        url: 'https://your-application-url.com/api/login', 
        body: {
            username: username,
            password: password,
        },
    })
    .its('body').then((body) => {
        window.localStorage.setItem('authToken', body.token);
    });
});

// Auth0 authentication
Cypress.Commands.add(
    'loginByAuth0Api',
    (username: string, password: string) => {
      cy.log(`Authenticating as ${username}`)
      const client_id = Cypress.env('auth0_client_id')
      const client_secret = Cypress.env('auth0_client_secret')
      const audience = Cypress.env('auth0_audience')
      const scope = Cypress.env('auth0_scope')
  
      cy.request({
        method: 'POST',
        url: `https://${Cypress.env('auth0_domain')}/oauth/token`,
        body: {
          grant_type: 'password',
          username,
          password,
          audience,
          scope,
          client_id,
          client_secret,
        },
      }).then(({ body }) => {
        const claims = jwt.decode(body.id_token)
        const {
          nickname,
          name,
          picture,
          updated_at,
          email,
          email_verified,
          sub,
          exp,
        } = claims
        const item = {
          body: {
            ...body,
            decodedToken: {
              claims,
              user: {
                nickname,
                name,
                picture,
                updated_at,
                email,
                email_verified,
                sub,
              },
              audience,
              client_id,
            },
          },
          expiresAt: exp,
        }
        window.localStorage.setItem('auth0Cypress', JSON.stringify(item))
        cy.visit('/')
      })
    }
  )
  