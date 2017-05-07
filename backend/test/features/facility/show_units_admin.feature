@sprint1 @working
Feature: Show units admin
  As administrator
  I want to be able to show the units of the system

  Background:
    Given [show_units_admin] I'm logged as an administrator
    And the following organization:
    | id | name           | type    |
    | 20 | MyOrganization | company |
    And the following facilities:
    | id | name           | location          | organization_id |
    | 20 | Sala principal | Cubierta exterior |              20 |

  Scenario: Show units
    Given the following units:
      | id | name  | location | refrigerant | mark | facility_id |
      |  1 | unit1 | LOCATION | R410A       | MARK |          20 |
      |  2 | unit2 | LOCATION | R410A       | MARK |          20 |
      |  3 | unit3 | LOCATION | R410A       | MARK |          20 |
    When [show_units_admin] I get units
    Then [show_units_admin] I should receive 3 units and 200 as status code
    And each unit should have name, location, refrigerant, token and facility

  Scenario: Show units of a empty facility
    When [show_units_admin] I get units
    Then [show_units_admin] I should receive 0 units and 200 as status code
