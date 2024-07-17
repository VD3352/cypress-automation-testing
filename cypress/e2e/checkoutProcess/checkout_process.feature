Feature: Checkout process in SauceDemo
 @test
  Scenario: Complete checkout process without payment
    Given I am logged in to SauceDemo
    When  I add the first product to the cart
    And   I proceed to checkout
    And   I fill in checkout information
    And   I complete the checkout process
    Then  I should see checkout complete confirmation
