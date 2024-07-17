Feature: Adding products to cart in SauceDemo
@test
  Scenario: Add a product to the cart
    Given I am logged in to SauceDemo
    When  I add the first product to the cart
    Then  I should see the cart badge updated
@test
  Scenario: Add products to cart after filtering by price
    Given I am logged in to SauceDemo
    When  I sort products by ascending order "Price (low to high)"
    And   I add the "first" listed product to the cart
    And   I add the "last" listed product to the cart
    Then  I should see both products descriptions on the cart page
    And   I should see both products prices on the cart page
