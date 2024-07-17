// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.

import element from './../fixtures/webLocator.json';

Cypress.Commands.add('login', (userName, password) => {
    cy.get(element.loginElement.userNameInput).clear().type(userName);
    cy.get(element.loginElement.passwordInput).clear().type(password);
    cy.get(element.loginElement.loginButton).click();
})

Cypress.Commands.add('selectValue', (selector, value) => {
    cy.get(selector).then($select => {
      if (!$select.is(':visible')) {
        cy.get(selector).should('be.visible');
      }
      cy.wrap($select).select(value);
    });
  });

  Cypress.Commands.add('selectItemsAndAddToCart', (selectItem) => {
    cy.get(element.productsElement.productList).then(($items) => {
        if (selectItem === 'first') {
            const firstItem = $items.first();
            cy.wrap(firstItem).find(element.productsElement.inventoryItemButton).click();
          } else {
            const lastItem = $items.last();
            cy.wrap(lastItem).find(element.productsElement.inventoryItemButton).click();
          }
        });
  });