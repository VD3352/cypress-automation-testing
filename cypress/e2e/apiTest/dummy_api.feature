Feature: CRUD Operations for JSONPlaceholder API
  @test
  Scenario: Retrieve a user by ID
    Given I perform a GET request to "/users/1"
    Then  the response status code should be 200
    And   the response body should contain user information

  @test
  Scenario: Create a new post
    Given I set request payload from "createUserRequest.json"
    And   I perform a POST request to "/posts"
    Then  the response status code should be 201

  @test
  Scenario: Update an existing post
    Given I set request payload from "updateUserRequest.json"
    And   I perform a PUT request to "/posts/1"
    Then  the response status code should be 200

  @test
  Scenario: Delete an existing post
    Given I perform a DELETE request to "/posts/1"
    Then  the response status code should be 200

