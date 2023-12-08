
// utils/graphql-test-utils.js

export const hasOperationName = (req, operationName) => {
  const { body } = req;
  return (
    body.hasOwnProperty('operationName') && body.operationName === operationName
  );
};

export const aliasQuery = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Query`;
  }
};

export const aliasMutation = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Mutation`;
  }
};

In our test file, we can import these utilities to alias the queries and mutations for our tests.

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
