import element from './../fixtures/webLocator.json';

class ProductSearch {

    getItemNamesInDescendingOrder() {
        return cy.get(element.productsElement.productList).then($inventoryItems => {
            const itemNames = $inventoryItems.map((index, ele) => {
                return Cypress.$(ele).find(element.productsElement.productName).text().trim();
            }).get();
            const sortedItemNames = itemNames.sort((a, b) => b.localeCompare(a));
            cy.log(sortedItemNames);
            return cy.wrap(sortedItemNames);
        });
    }
    getItemPriceInAscendingOrder() {
        return cy.get(element.productsElement.productsPrice).invoke('text').then(prices => {
            const pricesArray = prices.split('\n');
            const parsedPrices = pricesArray.map(price => parseFloat(price.replace('$', '')));
            const sortedPrices = parsedPrices.sort((a, b) => a - b);
            return sortedPrices;
        });

    }
    getItemPriceInDescendingOrder() {
        return cy.get(element.productsElement.productsPrice).invoke('text').then(prices => {
            const pricesArray = prices.split('\n');
            const parsedPrices = pricesArray.map(price => parseFloat(price.replace('$', '')));
            const sortedPrices = parsedPrices.sort((a, b) => b - a);
            return sortedPrices;
        });

    }

}

export default ProductSearch;