@sprint1
Feature: Remove unit
  As administrator
  I want to be able to remove a unit when it is useless

  Background:
    Given I'm logged as administrator
    And there is the following user:
    | id | first_name | last_name | enabled | admin | email           | password | salt |
    |  1 | Iván       | Portillo  | 1       | 1     | i32polei@uco.es | pass     | salt |
    And there is the following facility:
    | id | name           | location          |
    |  1 | Sala principal | Cubierta exterior |
    And there is the following unit:
    | id | name  | location | refrigerant | mark |
    |  1 | unit1 | LOCATION | R410A       | MARK |

  Scenario: Remove unit
    When I remove the unit with ID 1
    Then It shouldn't appear when I search units of facility ID 1
  Scenario: Remove a unit that does not exist
    When I remove the unit with ID 2
    Then I should receive a Not Found error with code 404 and message "Unit not found"