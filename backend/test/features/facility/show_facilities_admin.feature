@sprint1 @working
Feature: Show facilities admin
  As administrator
  I want to be able to show the facilities of the system

  Background:
    Given [show-facilities-admin] I'm logged in as an administrator
    And the following organization:
    | id | name           | type    |
    | 15 | MyOrganization | company |

  Scenario: Show 3 facilities
    Given the following facilities:
      | id | name           | location          | organization_id |
      |  1 | Sala principal | Cubierta exterior |              15 |
      |  2 | Vestibulo      | Cubierta exterior |              15 |
      |  3 | Taller         | Sala de máquinas  |              15 |
    When [show-facilities-admin] I get my facilities
    Then [show-facilities-admin] I should receive 3 facilities and 200 as status code
    And each facility should have name, location and organization

  Scenario: Show 1 facility
    Given the following facilities:
      | id | name           | location          | organization_id |
      |  1 | Sala principal | Cubierta exterior |              15 |
    When [show-facilities-admin] I get my facilities
    Then [show-facilities-admin] I should receive 1 facilities and 200 as status code
    And each facility should have name, location and organization

  Scenario: Show 0 facilities
    When [show-facilities-admin] I get my facilities
    Then [show-facilities-admin] I should receive 0 facilities and 200 as status code