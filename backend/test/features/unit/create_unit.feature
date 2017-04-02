@sprint1
Feature: Create unit
  As administrator
  I want to be able to create units to the facility of a user

  Background:
    Given I'm logged in as an administrator
    And there is the following user:
    | id | first_name | last_name | enabled | admin | email           | password | salt |
    |  1 | Iván       | Portillo  | 1       | 1     | i32polei@uco.es | pass     | salt |
    And there is the following facility:
    | id | name           | location          |
    |  1 | Sala principal | Cubierta exterior |

  Scenario: Create unit
    When I create to facility ID 1 the following unit:
    | name  | location | refrigerant | mark |
    | unit1 | LOCATION | R410A       | MARK |
    Then facility with ID 1 should have a unit with name "unit1"

  Scenario: Create a unit without refrigerant
    When I create to facility ID the following unit:
    | name  | location | mark |
    | unit1 | LOCATION | MARK |
    Then I should receive a validation error with code 400 and message "Refrigerant is required"