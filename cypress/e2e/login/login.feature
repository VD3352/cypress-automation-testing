Feature: Login to SauceDemo
    @test
    Scenario: Login with valid credentials
        Given I visit the SauceDemo login page
        When  I enter valid "username" and "password"
        And   I click login button
        Then  I should be redirected to inventory page
    @test
    Scenario: Login with valid username and invalid password
        Given I visit the SauceDemo login page
        When  I enter valid "username" and invalid "password"
        And   I click login button
        Then  I should see a invalid credentials message
    @test
    Scenario: Login with invalid username and valid password
        Given I visit the SauceDemo login page
        When  I enter invalid "username" and valid "password"
        And   I click login button
        Then  I should see a invalid credentials message

