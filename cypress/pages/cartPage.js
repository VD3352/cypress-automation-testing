import element from './../fixtures/webLocator.json';
class CartPage {

    getCartItems() {
        const descriptions = [];
        cy.get(element.cartElement.cartItem).each(($item, index) => {
            cy.wrap($item).find(element.cartElement.cartItemDesc).invoke('text').then((description) => {
                switch (index) {
                    case 0:
                        break;
                    case 1:
                        break;
                    default:
                        break;
                }
                descriptions.push(description);
            });
        });
        return cy.wrap(descriptions);

    }

    getCartPrices() {
        const prices = [];
        cy.get(element.cartElement.cartItem).each(($item) => {
          cy.wrap($item).find(element.cartElement.cartItemPrice).invoke('text').then((price) => {
            prices.push(price);
          });
        });
        return cy.wrap(prices);
      }

}

export default CartPage;