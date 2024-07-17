import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import testData from '../../fixtures/testData.json';
import element from '../../fixtures/webLocator.json';


Given('I visit the SauceDemo login page', () => {
    cy.visit(testData.appBaseUrl);
  });
  
  When('I enter valid {string} and {string}', (username, password) => {
    cy.get(element.loginElement.userNameInput).type(testData.userName);
    cy.get(element.loginElement.passwordInput).type(testData.password);
  });
  
  When('I click login button', () => {
    cy.get(element.loginElement.loginButton).click();
  });
  
  Then('I should be redirected to inventory page', () => {
    cy.url().should('include', testData.inventoryUrl);
  });

  When('I enter valid {string} and invalid {string}', (username, invalidPassword) => {
    cy.get(element.loginElement.userNameInput).type(testData.userName);
    cy.get(element.loginElement.passwordInput).type(testData.invalidPassword);
  });

  When('I enter invalid {string} and valid {string}', (invalidUserName, password) => {
    cy.get(element.loginElement.userNameInput).type(testData.invalidUserName);
    cy.get(element.loginElement.passwordInput).type(testData.password);
  });

  Then("I should see a invalid credentials message", () => {
    cy.get(element.loginElement.validationError).should('be.visible').then((message) => {
        const errorText = message.text().trim();
        expect(errorText).to.equal(testData.invalidLoginMessage);
    })
});









