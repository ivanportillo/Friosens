@sprint1
Feature: Create user
  As administrator
  I want to be able to create a user
  to give him access to the system

  Background:
    Given I'm logged in as an administrator

  Scenario: Create a user
    When I create a new user with the following data:
    | first_name | last_name | admin | email           | password |
    | Isidro     | Heliodoro | false | i32polei@uco.es | vinicio  |
    Then I should be able to login with "i32polei@uco.es" as username and "vinicio" as password

  Scenario: Register a user without last name
    When I create a new user with the following data:
    | first_name | admin | email           | password |
    | Isidro     | false | i32polei@uco.es | vinicio  |
    Then I should receive a validation error with code 400 and message "Last name is required"

  Scenario: Register a user with a invalid email
    When I create a new user with the following data:
    | first_name | last_name | admin | email        | password |
    | Isidro     | Heliodoro | 0     | i32polei@uco | vinicio  |
    Then I should receive a validation error with code 400 and message "Invalid email"
