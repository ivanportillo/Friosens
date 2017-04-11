@sprint1
Feature: Create unit
  As administrator
  I want to be able to create units to the facility of a user

  Background:
    Given [create-unit] I'm logged in as administrator
    And there is the following user:
    | id | first_name | last_name | enabled | admin | email           | password | salt |
    | 20 | Iván       | Portillo  | 1       | 1     | i32polei@uco.es | pass     | salt |
    And the following facility:
    | id | name           | location          | user_id |
    | 20 | Sala principal | Cubierta exterior |      20 |

  Scenario: Create unit
    When I create to facility ID 20 the following unit:
    | name  | location | refrigerant | mark |
    | unit1 | LOCATION | R410A       | MARK |
    Then I should receive a response with the unit and status code 200
    And facility with ID 20 should have a unit with name "unit1"

  Scenario: Create a unit without refrigerant
    When I create to facility ID 20 the following unit:
    | name  | location | mark |
    | unit1 | LOCATION | MARK |
    Then I should receive a validation error with code 400 and message "Refrigerant is required"