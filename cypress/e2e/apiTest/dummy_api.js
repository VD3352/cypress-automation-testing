import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import testData from '../../fixtures/testData.json';

let requestBody;
let responseStatus;

When('I perform a GET request to {string}', (url) => {
  cy.request('GET', url).then((response) => {
    responseStatus = response.status;
    cy.wrap(response);
  });

});
Given('I set request payload from {string}', (payloadFile) => {
  cy.fixture(payloadFile).then((payload) => {
    cy.wrap(payload);
  });
});

When('I perform a POST request to {string}', (url) => {
  cy.request('POST', url, requestBody).then((response) => {
    responseStatus = response.status;
    cy.wrap(response);
  });
});

When('I perform a PUT request to {string}', (url) => {
  cy.request('PUT', url, requestBody).then((response) => {
    responseStatus = response.status;
    cy.wrap(response);
  });
});

When('I perform a DELETE request to {string}', (url) => {
  cy.request('DELETE', url).then((response) => {
    responseStatus = response.status;
    cy.wrap(response);
  });
});

Then('the response status code should be {int}', (statusCode) => {
  expect(responseStatus).to.equal(statusCode);
});

Then('the response body should contain user information', () => {
  cy.request('GET',testData.apiDetails.apiBaseUrl + '/users/1').then((response) => {
    cy.wrap(response).should((response) => {
      expect(response.body.id).to.equal(1);
      expect(response.body.name).to.equal(testData.apiDetails.name);
      expect(response.body.username).to.equal(testData.apiDetails.username);
    });
  });
});