import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import element from '../../fixtures/webLocator.json';
import testData from '../../fixtures/testData.json';
import '../../support/commands';

import ProductSearchPage from '../../pages/productSearch';

const productSearch = new ProductSearchPage();

Given('I am logged in to SauceDemo', () => {
    cy.visit(testData.appBaseUrl);
    cy.login(testData.userName, testData.password);
});

When('I sort products by descending order {string}', (value) => {
    cy.selectValue(element.productsElement.productSortDropdown, value);
});

When('I sort products by ascending order {string}', (value) => {
    cy.selectValue(element.productsElement.productSortDropdown, value);
});

When('I sort products by descending order of {string}', (value) => {
    cy.selectValue(element.productsElement.productSortDropdown, value);
});

When('I should see products listed in descending order by name', () => {
    productSearch.getItemNamesInDescendingOrder().then(sortedItemNames => {
        expect(sortedItemNames).to.deep.equal(sortedItemNames.slice().sort().reverse());
      });
});

Then('I should see products listed in ascending order of price', () => {
    productSearch.getItemPriceInAscendingOrder().then(sortedPrices => {
        cy.get(element.productsElement.productList).each(($item, index) => {
            if (index < sortedPrices.length) {
                cy.wrap($item).find(element.productsElement.productsPrice).should('contain.text', `$${sortedPrices[index].toFixed(2)}`);
            } else {
                // Handle case where index is out of bounds
            }
        });
    })
});

Then('I should see products listed in descending order of price', () => {
    productSearch.getItemPriceInDescendingOrder().then(sortedPrices => {
        cy.get(element.productsElement.productList).each(($item, index) => {
            if (index < sortedPrices.length) {
                cy.wrap($item).find(element.productsElement.productsPrice).should('contain.text', `$${sortedPrices[index].toFixed(2)}`);
            } else {
                // Handle case where index is out of bounds
            }
        });
    });
});

Then('I should see available products listed', () => {
    cy.get(element.productsElement.productList).should('have.length.gt', 0);
});
