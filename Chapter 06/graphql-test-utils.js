
// our-test-file.cy.js
import { aliasQuery, aliasMutation } from '../utils/graphql-test-utils';

context('Tests', () => {
  beforeEach(() => {
    cy.intercept('POST', 'http://localhost:3000/graphql', (req) => {
      // Queries
      aliasQuery(req, 'GetLaunchList');
      aliasQuery(req, 'LaunchDetails');
      aliasQuery(req, 'GetMyTrips');

      // Mutations
      aliasMutation(req, 'Login');
      aliasMutation(req, 'BookTrips');
    });
  });
  // ...
});