@sprint1
Feature: Create a facility
  As an administrator
  I want to be able to create facilities

  Background:
    Given [create-facility] I'm logged in as an administrator
    And there is the following user:
    | id | first_name | last_name | enabled | admin | email           | password | salt |
    | 20 | Iván       | Portillo  | 1       | 0     | i32polei@uco.es | pass     | salt |

  Scenario: Create a new facility
    When I create to the user with ID 20 the following facility:
    | name           | location          |
    | Sala principal | Cubierta exterior |
    Then User with ID 20 should have one facility with name "Sala principal"

  Scenario: Create a facility without name
    When I create to the user with ID 20 the following facility:
    | location          |
    | Cubierta exterior |
    Then the response is a validation error with code 400 and message "Name is required"
