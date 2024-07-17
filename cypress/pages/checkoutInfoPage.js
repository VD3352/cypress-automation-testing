import element from './../fixtures/webLocator.json';

class CheckoutInfo {

    setCheckoutInfo(firstName, lastName, postalCode) {
        cy.get(element.checkoutElement.firstNameInput).clear().type(firstName);
        cy.get(element.checkoutElement.lastNameInput).clear().type(lastName);
        cy.get(element.checkoutElement.postalCodeInput).clear().type(postalCode);
        cy.get(element.checkoutElement.continueButton).click();
    }

    getSummaryInfo() {
        const summaryInfo = {};
        cy.get(element.checkoutElement.summaryInfoLabel).each(($label, index) => {
            const label = $label.text().trim();
            const value = $label.next(element.checkoutElement.summaryValueLabel).text().trim();
            summaryInfo[label] = value;
        });
        return cy.wrap(summaryInfo);
    }

    getOrderDispatchedMessage() {
        const messages = {};
        cy.get(element.checkoutElement.checkoutCompleteContainer).within(() => {
            cy.get(element.checkoutElement.thankYouMessage).invoke('text').then(text => {
                messages.thankYouMessage = text.trim();
            });
            cy.get(element.checkoutElement.orderDispatchedMessage).invoke('text').then(text => {
                messages.orderDispatchedMessage = text.trim();
            });
        });
        return cy.wrap(messages);
    }

}

export default CheckoutInfo;