@sprint1
Feature: Create unit
  As administrator
  I want to be able to create units to the facility of a organization

  Background:
    Given [create-unit] I'm logged in as administrator
    And the following organization:
    | id | name           | type    |
    | 20 | MyOrganization | company |
    And the following facility:
    | id | name           | location          | organization_id |
    | 20 | Sala principal | Cubierta exterior |              20 |

  Scenario: Create unit
    When I create to facility ID 20 the following unit:
    | name  | location | refrigerant | mark |
    | unit1 | LOCATION | R410A       | MARK |
    Then I should receive a response with the unit and status code 200
    And facility with ID 20 should have a unit with name "unit1"
    And unit with name "unit1" should have a valid token

  Scenario: Create a unit without refrigerant
    When I create to facility ID 20 the following unit:
    | name  | location | mark |
    | unit1 | LOCATION | MARK |
    Then I should receive a validation error with code 400 and message "Refrigerant is required"