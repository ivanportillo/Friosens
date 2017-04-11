@sprint1
Feature: Show units
  As user
  I want to be able to show the units of a facility

  Background:
    Given [show_units] I'm logged as user ID 20
    And the following facility:
    | id | name           | location          | user_id |
    | 20 | Sala principal | Cubierta exterior |      20 |

  Scenario: Show units
    Given the following units:
      | id | name  | location | refrigerant | mark | facility_id |
      |  1 | unit1 | LOCATION | R410A       | MARK |          20 |
      |  2 | unit2 | LOCATION | R410A       | MARK |          20 |
      |  3 | unit3 | LOCATION | R410A       | MARK |          20 |
    When I get units of facility ID 20
    Then I should receive 3 units and 200 as status code

  Scenario: Show units of a empty facility
    When I get units of facility ID 20
    Then I should receive 0 units and 200 as status code
