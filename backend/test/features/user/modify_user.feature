Feature: Update user
  As administrator
  I want to be able to update a user to change any data

  Background:
    Given I'm logged in as an administrator
    And there is the following user:
    | id | first_name | last_name | enabled | admin | email           | password | salt |
    |  1 | Iván       | Portillo  | 1       | 1     | i32polei@uco.es | pass     | salt |

  Scenario: Update a user
    When I change First Name of user ID 1 to 'Juan'
    Then user ID 1 First Name should be 'Juan'

  Scenario: Update a user giving a blank last name
    When I change Last Name of user ID 1 to ''
    Then I should receive a Validation Error with code 400 and message "Last name is required"

  Scenario: Update a user giving a invalid email
    When I change Email of user ID 1 to 'invalid@email'
    Then I should receive a Validation Error with code 400 and message "Invalid email"
