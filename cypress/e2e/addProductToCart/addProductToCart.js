import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import element from '../../fixtures/webLocator.json';
import CartPage from '../../pages/cartPage';
const cartPage = new CartPage();
import testData from '../../fixtures/testData.json';

When('I add the first product to the cart', () => {
  cy.get(element.productsElement.inventoryItemButton).first().click();
});

Then('I should see the cart badge updated', () => {
  cy.get(element.productsElement.shoppingCartBadge).should('contain', '1');
});

When("I add the {string} listed product to the cart", (itemName) => {
  cy.selectItemsAndAddToCart(itemName);
});

Then("I should see both products descriptions on the cart page", () => {
  cy.scrollTo(0, 0);
  cy.get(element.productsElement.shoppingCart).click();
  cartPage.getCartItems().then((descriptions) => {
    expect(descriptions).to.have.lengthOf.at.least(2);
    expect(descriptions[0]).to.contain(testData.firstItemDesc);
    expect(descriptions[1]).to.contain(testData.LastItemDesc);
  })
});

Then("I should see both products prices on the cart page", () => {
  cartPage.getCartPrices().then((prices) => {
    prices.forEach((price, index) => {
      cy.log(`Item ${index + 1} Price: ${price}`);
      expect(Number(price)).to.be.a('number', `Price of item ${index + 1} is not a number`);
    });
  });
});
