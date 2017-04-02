@sprint1
Feature: Show units
  As user
  I want to be able to show the units of a facility

  Background:
    Given I'm logged as user ID 1
    And the following facility:
    | id | name           | location          | user_id |
    |  1 | Sala principal | Cubierta exterior |       1 |
    And the following units:
    | id | name  | location | refrigerant | mark | facility_id |
    |  1 | unit1 | LOCATION | R410A       | MARK |           1 |
    |  2 | unit2 | LOCATION | R410A       | MARK |           1 |
    |  3 | unit3 | LOCATION | R410A       | MARK |           1 |

  Scenario: Show units
    When I show my units
    Then I should receive 3 units and 200 as status code