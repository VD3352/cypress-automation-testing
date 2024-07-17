Feature: Product search in SauceDemo
    @test
    Scenario: Search products by name
        Given I am logged in to SauceDemo
        When  I sort products by descending order "Name (Z to A)"
        Then  I should see products listed in descending order by name
    @test
    Scenario: Search products by price low to high
        Given I am logged in to SauceDemo
        When  I sort products by ascending order "Price (low to high)"
        Then  I should see products listed in ascending order of price
    @test
    Scenario: Search products by price high to low
        Given I am logged in to SauceDemo
        When  I sort products by descending order of "Price (high to low)"
        Then  I should see products listed in descending order of price
    @test
    Scenario: Search products by availability
        Given I am logged in to SauceDemo
        Then  I should see available products listed
