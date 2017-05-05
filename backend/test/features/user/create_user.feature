@sprint1
Feature: Create user
  As administrator
  I want to be able to create a user in a organization
  to give him access to the system

  Background:
    Given [create-user] I'm logged in as an administrator
    And the following organization:
    | id | name           | type    |
    | 20 | MyOrganization | company |


  Scenario: Create a administrator
    When I create a new user with the following data:
    | first_name | last_name | admin | email           | password |
    | Isidro     | Heliodoro |  true | i32polei@uco.es | vinicio  |
    Then I should be able to login with "i32polei@uco.es" as username and "vinicio" as password

  Scenario: Create a user with organization
    When I create a new user with the following data:
    | first_name | last_name | admin | email           | password | organization_id |
    | Isidro     | Heliodoro | false | i32polei@uco.es | vinicio  |              20 |
    Then I should be able to login with "i32polei@uco.es" as username and "vinicio" as password

  Scenario: Register a user without last name
    When I create a new user with the following data:
    | first_name | admin | email           | password | organization_id |
    | Isidro     | false | i32polei@uco.es | vinicio  |              20 |
    Then [create-user] I should receive a validation error with code 400 and message "Last name is required"

  Scenario: Register a user with a invalid email
    When I create a new user with the following data:
    | first_name | last_name | admin | email        | password | organization_id |
    | Isidro     | Heliodoro | false | i32polei@uco | vinicio  |              20 |
    Then [create-user] I should receive a validation error with code 400 and message "Invalid email"

  Scenario: Register a administrator with organization
    When I create a new user with the following data:
      | first_name | last_name | admin | email           | password | organization_id |
      | Isidro     | Heliodoro |  true | i32polei@uco.es | vinicio  |              20 |
    Then [create-user] I should receive a validation error with code 400 and message "An administrator cant have a organization"

  Scenario: Register a users without admin and without organization
    When I create a new user with the following data:
      | first_name | last_name | email           | password |
      | Isidro     | Heliodoro | i32polei@uco.es | vinicio  |
    Then [create-user] I should receive a validation error with code 400 and message "A user should have a organization or be admin"