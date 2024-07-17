import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import testData from '../../fixtures/testData.json';
import CheckoutInfo from '../../pages/checkoutInfoPage';
import element from '../../fixtures/webLocator.json';

const checkoutInfo = new CheckoutInfo();

When('I proceed to checkout', () => {
    cy.get(element.checkoutElement.shoppingCartLink).click();
    cy.url().should('include', testData.cartUrl);
    cy.get(element.checkoutElement.checkoutButton).click();
});

When('I fill in checkout information', () => {
    checkoutInfo.setCheckoutInfo(testData.firstName, testData.lastName, testData.postalCode);
});

When('I complete the checkout process', () => {
    checkoutInfo.getSummaryInfo().then((summaryInfo) => {
        cy.log('Payment Information:', summaryInfo['Payment Information:']);
        cy.log('Shipping Information:', summaryInfo['Shipping Information:']);
        cy.log('Price Total:', summaryInfo['Price Total']);
    })
    cy.get(element.checkoutElement.summaryTotalLabel).should('contain', 'Total:');
    cy.get(element.checkoutElement.finishButton).click();
});

Then('I should see checkout complete confirmation', () => {
    cy.url().should('include', testData.checkoutUrl);
    checkoutInfo.getOrderDispatchedMessage().then(messages => {
        cy.wrap(messages).as('orderMessages');
    });
    cy.get('@orderMessages').then(messages => {
        expect(messages.thankYouMessage).to.equal(testData.thankYouMessage);
        expect(messages.orderDispatchedMessage).to.equal(testData.orderDispatchedMessage);
    });
});
